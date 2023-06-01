import { Controller, Get } from '@nestjs/common';
import { Service } from './service';

@Controller()
export class Api {
  constructor(private readonly appService: Service) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
