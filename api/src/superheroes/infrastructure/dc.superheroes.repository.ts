import { SuperheroesRepository } from '../domain/superheroes.repository';
import { Injectable } from '@nestjs/common';
import {
  Pagination,
  SuperHero,
  SuperHeroesPage,
} from '../domain/superheroes.types';
import * as dcJson from './dc.json';

const PAGE_LIMIT = 5;

type DCHero = {
  name: string;
  alter_ego: string;
  powers: string[];
  first_appearance: string;
  photo_url: string;
};

@Injectable()
export class DCSuperheroesRepository implements SuperheroesRepository {
  async findByPage(currentPage: number): Promise<SuperHeroesPage> {
    return this.mapToSuperHeroesPage(dcJson as DCHero[], currentPage);
  }

  private mapToSuperHeroesPage(
    dcHeroes: DCHero[],
    page: number,
  ): SuperHeroesPage {
    return {
      heroes: this.paginate(dcHeroes, page).map(this.mapToHero, page),
      pagination: this.mapToPagination(dcHeroes, page),
    };
  }

  private paginate(dcHeroesCompleteList: DCHero[], page: number): DCHero[] {
    const offset = PAGE_LIMIT * (page - 1);
    return dcHeroesCompleteList.slice(offset, offset + PAGE_LIMIT);
  }

  private mapToHero(dcHero: DCHero): SuperHero {
    return {
      name: dcHero.name,
      image: dcHero.photo_url,
    };
  }

  private mapToPagination(
    dcHeroesCompleteList: DCHero[],
    page: number,
  ): Pagination {
    return {
      currentPage: page,
      lastPage: Math.ceil(dcHeroesCompleteList.length / PAGE_LIMIT),
    };
  }
}
