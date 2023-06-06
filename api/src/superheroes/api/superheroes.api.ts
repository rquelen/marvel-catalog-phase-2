import { Controller, Get, Query } from '@nestjs/common';
import { MarvelSuperheroesRepository } from '../infrastructure/marvel.superheroes.repository';
import { getSuperheroes } from '../domain/get-superheroes.usecase';

import { SuperHeroesPage } from '../domain/superheroes.types';
import { FakeSuperHeroesRepository } from '../infrastructure/fake/fake.superheroes.repository';

@Controller('superheroes')
export class SuperheroesApi {
  constructor(
    private readonly marvelSuperheroesRepository: MarvelSuperheroesRepository,
    private readonly fakeSuperHeroesRepository: FakeSuperHeroesRepository,
  ) {}

  @Get('/marvel')
  getSuperheroes(@Query('page') page: string): Promise<SuperHeroesPage> {
    const repository = process.env.TEST_MODE
      ? this.fakeSuperHeroesRepository
      : this.marvelSuperheroesRepository;
    return getSuperheroes(repository, Number(page));
  }
}
