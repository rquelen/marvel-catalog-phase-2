import { DCSuperheroesRepository } from '../dc.superheroes.repository';

export const firstPageDC = {
  heroes: [
    { name: 'Aquaman', image: 'https://example.com/aquaman.jpg' },
    { name: 'Batgirl', image: 'https://example.com/batgirl.jpg' },
    { name: 'Batman', image: 'https://example.com/batman.jpg' },
    {
      name: 'Black Canary',
      image: 'https://example.com/blackcanary.jpg',
    },
    { name: 'Cyborg', image: 'https://example.com/cyborg.jpg' },
  ],
  pagination: { currentPage: 1, lastPage: 2 },
};

export const secondPageDC = {
  heroes: [
    {
      image: 'https://example.com/flash.jpg',
      name: 'Flash',
    },
    {
      image: 'https://example.com/greenarrow.jpg',
      name: 'Green Arrow',
    },
    {
      image: 'https://example.com/greenlantern.jpg',
      name: 'Green Lantern',
    },
    {
      image: 'https://example.com/hawkgirl.jpg',
      name: 'Hawkgirl',
    },
    {
      image: 'https://example.com/hawkman.jpg',
      name: 'Hawkman',
    },
  ],
  pagination: {
    currentPage: 2,
    lastPage: 2,
  },
};

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
