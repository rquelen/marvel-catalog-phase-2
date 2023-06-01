import { Module } from '@nestjs/common';
import { SuperheroesApi } from './api/superheroes.api';
import { MarvelSuperheroesRepository } from './infrastructure/marvel.superheroes.repository';

@Module({
  controllers: [SuperheroesApi],
  providers: [MarvelSuperheroesRepository],
})
export class SuperheroesModule {}
