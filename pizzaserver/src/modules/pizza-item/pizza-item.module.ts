import { Module } from '@nestjs/common';
import { PizzaItemController } from './pizza-item.controller';
import { PizzaItemService } from './pizza-item.service';

@Module({
  controllers: [PizzaItemController],
  exports: [PizzaItemService],
  providers: [PizzaItemService],
})
export class PizzaItemModule {}
