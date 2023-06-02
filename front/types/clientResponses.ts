import { ClientPagination } from './pagination';
import { ClientHero } from './heroes';

export interface ClientHeroes {
  heroes: ClientHero[];
  pagination: ClientPagination;
}
