import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { SuperheroesModule } from './superheroes/superheroes.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    HelloWorldModule,
    SuperheroesModule,
  ],
})
export class AppModule {}
