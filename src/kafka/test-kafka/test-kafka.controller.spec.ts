import { Test, TestingModule } from '@nestjs/testing';
import { TestKafkaController } from './test-kafka.controller';

describe('TestKafkaController', () => {
  let controller: TestKafkaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestKafkaController],
    }).compile();

    controller = module.get<TestKafkaController>(TestKafkaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
