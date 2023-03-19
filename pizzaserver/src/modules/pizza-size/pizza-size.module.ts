import { Module } from '@nestjs/common';
import { PizzaSizeService } from './pizza-size.service';
import { PizzaSizeController } from './pizza-size.controller';

@Module({
  controllers: [PizzaSizeController],
  providers: [PizzaSizeService]
})
export class PizzaSizeModule {}
