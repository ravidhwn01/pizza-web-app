import { Module } from '@nestjs/common';
import { PizzaItemService } from './pizza-item.service';
import { PizzaItemController } from './pizza-item.controller';

@Module({
  controllers: [PizzaItemController],
  providers: [PizzaItemService]
})
export class PizzaItemModule {}
