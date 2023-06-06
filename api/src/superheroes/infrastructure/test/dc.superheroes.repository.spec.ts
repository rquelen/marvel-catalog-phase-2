import { DCSuperheroesRepository } from '../dc.superheroes.repository';
import { firstPageDC, secondPageDC } from './dc.fixtures';

describe('dc superheros repository', () => {
  it('should return superheroes from first page', async () => {
    // given
    const dcSuperheroesRepository = new DCSuperheroesRepository();

    // when
    const result = await dcSuperheroesRepository.findByPage(1);

    // then

    expect(result).toEqual(firstPageDC);
  });

  it('should return superheroes from second page', async () => {
    // given
    const dcSuperheroesRepository = new DCSuperheroesRepository();

    // when
    const result = await dcSuperheroesRepository.findByPage(2);

    // then
    expect(result).toEqual(secondPageDC);
  });
});
