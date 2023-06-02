import { SuperheroesRepository } from '../superheroes.repository';
import { SuperHeroesPage } from '../superheroes.types';
import { firstPage, secondPage } from './superheroes.fixture';

export class FakeSuperHeroesRepository implements SuperheroesRepository {
  findByPage(currentPage: number): Promise<SuperHeroesPage> {
    if (currentPage === 1) return Promise.resolve(firstPage);
    if (currentPage === 2) return Promise.resolve(secondPage);
  }
}
