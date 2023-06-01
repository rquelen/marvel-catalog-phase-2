import { Test, TestingModule } from '@nestjs/testing';
import { HelloWorldApi } from './hello-world.api';
import { HelloWorldService } from './hello-world.service';

describe('HelloWorld Controller', () => {
  let appController: HelloWorldApi;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloWorldApi],
      providers: [HelloWorldService],
    }).compile();

    appController = app.get(HelloWorldApi);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
