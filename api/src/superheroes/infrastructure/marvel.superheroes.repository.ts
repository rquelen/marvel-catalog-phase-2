import { createHash } from 'crypto';
import { SuperheroesRepository } from '../domain/superheroes.repository';
import { Injectable } from '@nestjs/common';
import {
  Pagination,
  SuperHero,
  SuperHeroesPage,
} from '../domain/superheroes.types';

const PAGE_LIMIT = 20;
export const MARVEL_API_ROOT = 'http://gateway.marvel.com/v1/public';
export const PUBLIC_KEY = '08c38d21b9ee1dcc43c10a0e86f830e8';

type MarvelApiHero = {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
};

type MarvelApiResponse = {
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: MarvelApiHero[];
  };
};

@Injectable()
export class MarvelSuperheroesRepository implements SuperheroesRepository {
  async findByPage(currentPage: number): Promise<SuperHeroesPage> {
    const timestamp = this.generateTimestamp();
    const hash = this.generateHash(timestamp);
    const searchParams = new URLSearchParams({
      limit: PAGE_LIMIT.toString(),
      offset: (PAGE_LIMIT * (currentPage - 1)).toString(),
      ts: timestamp.toString(),
      apikey: PUBLIC_KEY,
      hash,
    });
    const url = new URL(MARVEL_API_ROOT + '/characters');
    url.search = searchParams.toString();
    const apiResponse = await fetch(url);
    const marvelApiResponse: MarvelApiResponse = await apiResponse.json();
    return this.mapToSuperHeroesPage(marvelApiResponse);
  }

  private generateHash(timestamp: number) {
    return createHash('md5')
      .update(timestamp + process.env.PRIVATE_MARVEL + PUBLIC_KEY)
      .digest('hex');
  }

  private generateTimestamp(): number {
    return Date.now();
  }

  private mapToSuperHeroesPage(
    marvelApiResponse: MarvelApiResponse,
  ): SuperHeroesPage {
    return {
      heroes: marvelApiResponse.data.results.map(this.mapToHero),
      pagination: this.mapToPagination(marvelApiResponse),
    };
  }

  private mapToHero(marvelApiHero: MarvelApiHero): SuperHero {
    return {
      name: marvelApiHero.name,
      image: `${marvelApiHero.thumbnail.path}.${marvelApiHero.thumbnail.extension}`,
    };
  }

  private mapToPagination(marvelApiResponse: MarvelApiResponse): Pagination {
    return {
      currentPage:
        Math.floor(
          marvelApiResponse.data.offset / marvelApiResponse.data.limit,
        ) + 1,
      lastPage: Math.floor(
        marvelApiResponse.data.total / marvelApiResponse.data.limit,
      ),
    };
  }
}
