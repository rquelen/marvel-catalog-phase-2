import { SuperheroesRepository } from '../../domain/superheroes.repository';
import { SuperHeroesPage } from '../../domain/superheroes.types';
import { firstPage, secondPage, thirdPage } from './superheroes.fixture';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FakeSuperHeroesRepository implements SuperheroesRepository {
  findByPage(currentPage: number): Promise<SuperHeroesPage> {
    switch (currentPage) {
      case 1:
        return Promise.resolve(firstPage);
      case 2:
        return Promise.resolve(secondPage);
      case 3:
        return Promise.resolve(thirdPage);
    }
  }
}
