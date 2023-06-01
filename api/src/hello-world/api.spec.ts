import { Test, TestingModule } from '@nestjs/testing';
import { Api } from './api';
import { Service } from './service';

describe('HelloWorld Controller', () => {
  let appController: Api;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Api],
      providers: [Service],
    }).compile();

    appController = app.get(Api);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
