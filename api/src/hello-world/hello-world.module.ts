import { Module } from '@nestjs/common';
import { HelloWorldApi } from './hello-world.api';
import { HelloWorldService } from './hello-world.service';

@Module({
  controllers: [HelloWorldApi],
  providers: [HelloWorldService],
})
export class HelloWorldModule {}
