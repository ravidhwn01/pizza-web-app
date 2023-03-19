import { Test, TestingModule } from '@nestjs/testing';
import { PizzaItemController } from './pizza-item.controller';
import { PizzaItemService } from './pizza-item.service';

describe('PizzaItemController', () => {
  let controller: PizzaItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PizzaItemController],
      providers: [PizzaItemService],
    }).compile();

    controller = module.get<PizzaItemController>(PizzaItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
