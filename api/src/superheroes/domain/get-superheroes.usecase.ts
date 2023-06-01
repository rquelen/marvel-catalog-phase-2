import { SuperheroesRepository } from './superheroes.repository';
import { SuperHeroesPage } from './superheroes.types';

export const getSuperheroes = (
  superheroesRepository: SuperheroesRepository,
  page: number,
): Promise<SuperHeroesPage> => {
  return superheroesRepository.findByPage(page);
};
