import {
  MARVEL_API_ROOT,
  MarvelSuperheroesRepository,
  PUBLIC_KEY,
} from '../marvel.superheroes.repository';
import { firstPage, secondPage } from '../../domain/test/superheroes.fixture';
import nock = require('nock');

describe('marvel superheros repository', () => {
  beforeAll(() => {
    jest
      .useFakeTimers({
        doNotFake: ['nextTick'],
      })
      .setSystemTime(new Date('2020-01-01'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should return superheroes from first page', async () => {
    // given
    const marvelSuperheroesRepository = new MarvelSuperheroesRepository();

    nock(MARVEL_API_ROOT)
      .get('/characters')
      .query(
        ({ limit, offset, ts, apikey, hash }: Record<string, string>) =>
          limit === '20' &&
          offset === '0' &&
          ts === '1577836800000' &&
          apikey === PUBLIC_KEY &&
          hash === 'b147a5de0e2346cd9117ededaf610743',
      )
      .reply(200, {
        data: {
          offset: 0,
          total: 2,
          limit: 1,
          results: [
            {
              id: 1,
              name: 'A',
              thumbnail: {
                path: 'A',
                extension: 'jpg',
              },
              resourceURI: 'resourceURI',
            },
          ],
        },
      });

    // when
    const result = await marvelSuperheroesRepository.findByPage(1);

    // then
    expect(result).toEqual(firstPage);
  });

  it('should return superheroes from second page', async () => {
    // given
    const marvelSuperheroesRepository = new MarvelSuperheroesRepository();

    nock(MARVEL_API_ROOT)
      .get('/characters')
      .query(
        ({ limit, offset, ts, apikey, hash }: Record<string, string>) =>
          limit === '20' &&
          offset === '20' &&
          ts === '1577836800000' &&
          apikey === PUBLIC_KEY &&
          hash === 'b147a5de0e2346cd9117ededaf610743',
      )
      .reply(200, {
        data: {
          offset: 1,
          total: 2,
          limit: 1,
          results: [
            {
              id: 2,
              name: 'B',
              thumbnail: {
                path: 'B',
                extension: 'jpg',
              },
              resourceURI: 'resourceURI',
            },
          ],
        },
      });

    // when
    const result = await marvelSuperheroesRepository.findByPage(2);

    // then
    expect(result).toEqual(secondPage);
  });
});
