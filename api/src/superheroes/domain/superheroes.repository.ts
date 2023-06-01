import { SuperHeroesPage } from './superheroes.types';

export interface SuperheroesRepository {
  findByPage(currentPage: number): Promise<SuperHeroesPage>;
}
