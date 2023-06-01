export type SuperHero = {
  name: string;
  image: string;
};

export type Pagination = {
  currentPage: number;
  lastPage: number;
};

export type SuperHeroesPage = {
  heroes: SuperHero[];
  pagination: Pagination;
};
