import { SuperHeroesPage } from '../../domain/superheroes.types';

export const firstPage: SuperHeroesPage = {
  heroes: [
    {
      name: 'A',
      image: 'A.jpg',
    },
  ],
  pagination: {
    currentPage: 1,
    lastPage: 3,
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
    lastPage: 3,
  },
};

export const thirdPage: SuperHeroesPage = {
  heroes: [
    {
      name: 'C',
      image: 'C.jpg',
    },
  ],
  pagination: {
    currentPage: 3,
    lastPage: 3,
  },
};
