import { Test, TestingModule } from '@nestjs/testing';
import { PizzaItemService } from './pizza-item.service';

describe('PizzaItemService', () => {
  let service: PizzaItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PizzaItemService],
    }).compile();

    service = module.get<PizzaItemService>(PizzaItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
