import { Module } from '@nestjs/common';
import { PizzaItemModule } from '../pizza-item/pizza-item.module';
import { PizzaController } from './pizza.controller';
import { PizzaService } from './pizza.service';

@Module({
  imports: [PizzaItemModule],
  controllers: [PizzaController],
  providers: [PizzaService],
})
export class PizzaModule {}
