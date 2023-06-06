import { Controller, Get, Query } from '@nestjs/common';
import { MarvelSuperheroesRepository } from '../infrastructure/marvel.superheroes.repository';
import { getSuperheroes } from '../domain/get-superheroes.usecase';

import { SuperHeroesPage } from '../domain/superheroes.types';
import { FakeSuperHeroesRepository } from '../infrastructure/fake/fake.superheroes.repository';
import { DCSuperheroesRepository } from '../infrastructure/dc.superheroes.repository';

@Controller('superheroes')
export class SuperheroesApi {
  constructor(
    private readonly marvelSuperheroesRepository: MarvelSuperheroesRepository,
    private readonly dcSuperheroesRepository: DCSuperheroesRepository,
    private readonly fakeSuperHeroesRepository: FakeSuperHeroesRepository,
  ) {}

  @Get('/marvel')
  getMarvelSuperheroes(@Query('page') page: string): Promise<SuperHeroesPage> {
    const repository = process.env.TEST_MODE
      ? this.fakeSuperHeroesRepository
      : this.marvelSuperheroesRepository;
    return getSuperheroes(repository, Number(page));
  }

  @Get('/dc')
  getDCSuperheroes(@Query('page') page: string): Promise<SuperHeroesPage> {
    const repository = process.env.TEST_MODE
      ? this.fakeSuperHeroesRepository
      : this.dcSuperheroesRepository;
    return getSuperheroes(repository, Number(page));
  }
}
