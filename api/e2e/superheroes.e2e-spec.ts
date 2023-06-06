import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { MARVEL_API_ROOT } from '../src/superheroes/infrastructure/marvel.superheroes.repository';
import { firstPage } from '../src/superheroes/infrastructure/fake/superheroes.fixture';
import { firstPageDC } from '../src/superheroes/infrastructure/test/dc.fixtures';
import nock = require('nock');

describe('Superheroes (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/superheroes/marvel (GET)', async () => {
    nock(MARVEL_API_ROOT)
      .get('/characters')
      .query(true)
      .reply(200, {
        data: {
          offset: 0,
          total: 3,
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

    return request(app.getHttpServer())
      .get('/superheroes/marvel?page=1')
      .expect(200)
      .expect(firstPage);
  });

  it('/superheroes/dc (GET)', async () => {
    return request(app.getHttpServer())
      .get('/superheroes/dc?page=1')
      .expect(200)
      .expect(firstPageDC);
  });
});
