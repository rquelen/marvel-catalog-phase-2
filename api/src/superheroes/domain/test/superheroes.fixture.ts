import { SuperHeroesPage } from '../superheroes.types';

export const firstPage: SuperHeroesPage = {
  heroes: [
    {
      name: 'A',
      image: 'A.jpg',
    },
  ],
  pagination: {
    currentPage: 1,
    lastPage: 2,
  },
};
export const secondPage: SuperHeroesPage = {
  heroes: [
    {
      name: 'B',
      image: 'B.jpg',
    },
  ],
  pagination: {
    currentPage: 2,
    lastPage: 2,
  },
};
