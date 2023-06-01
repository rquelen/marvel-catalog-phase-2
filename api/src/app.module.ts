import { Module } from '@nestjs/common';
import { Api } from './hello-world/api';
import { Service } from './hello-world/service';

@Module({
  imports: [],
  controllers: [Api],
  providers: [Service],
})
export class AppModule {}
