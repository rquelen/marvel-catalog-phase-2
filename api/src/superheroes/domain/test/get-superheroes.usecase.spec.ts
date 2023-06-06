import { getSuperheroes } from '../get-superheroes.usecase';
import { FakeSuperHeroesRepository } from '../../infrastructure/fake/fake.superheroes.repository';
import {
  firstPage,
  secondPage,
} from '../../infrastructure/fake/superheroes.fixture';

describe('get superheroes usecase', () => {
  const fakeSuperHeroesRepository = new FakeSuperHeroesRepository();

  it('should return superheroes from first page', async () => {
    // when
    const result = await getSuperheroes(fakeSuperHeroesRepository, 1);

    // then
    expect(result).toBe(firstPage);
  });

  it('should return superheroes from second page', async () => {
    // when
    const result = await getSuperheroes(fakeSuperHeroesRepository, 2);

    // then
    expect(result).toBe(secondPage);
  });
});
