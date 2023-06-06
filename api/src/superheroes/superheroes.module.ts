import { Module } from '@nestjs/common';
import { SuperheroesApi } from './api/superheroes.api';
import { MarvelSuperheroesRepository } from './infrastructure/marvel.superheroes.repository';
import { FakeSuperHeroesRepository } from './infrastructure/fake/fake.superheroes.repository';

@Module({
  controllers: [SuperheroesApi],
  providers: [MarvelSuperheroesRepository, FakeSuperHeroesRepository],
})
export class SuperheroesModule {}
