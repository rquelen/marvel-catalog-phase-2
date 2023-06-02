import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { MARVEL_API_ROOT } from '../src/superheroes/infrastructure/marvel.superheroes.repository';
import { firstPage } from '../src/superheroes/domain/test/superheroes.fixture';
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

  it('/superheroes (GET)', async () => {
    nock(MARVEL_API_ROOT)
      .get('/characters')
      .query(true)
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

    return request(app.getHttpServer())
      .get('/superheroes?page=1')
      .expect(200)
      .expect(firstPage);
  });
});
