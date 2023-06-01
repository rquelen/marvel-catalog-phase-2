import { Controller, Get, Query } from '@nestjs/common';
import { MarvelSuperheroesRepository } from '../infrastructure/marvel.superheroes.repository';
import { getSuperheroes } from '../domain/get-superheroes.usecase';

import { SuperHeroesPage } from '../domain/superheroes.types';

@Controller('superheroes')
export class SuperheroesApi {
  constructor(
    private readonly marvelSuperheroesRepository: MarvelSuperheroesRepository,
  ) {}

  @Get()
  getHello(@Query('page') page: string): Promise<SuperHeroesPage> {
    return getSuperheroes(this.marvelSuperheroesRepository, Number(page));
  }
}
