import { Injectable } from '@nestjs/common';
import { CreatePizzaItemDto } from './dto/create-pizza-item.dto';
import { UpdatePizzaItemDto } from './dto/update-pizza-item.dto';

@Injectable()
export class PizzaItemService {
  create(createPizzaItemDto: CreatePizzaItemDto) {
    return 'This action adds a new pizzaItem';
  }

  findAll() {
    return `This action returns all pizzaItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pizzaItem`;
  }

  update(id: number, updatePizzaItemDto: UpdatePizzaItemDto) {
    return `This action updates a #${id} pizzaItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} pizzaItem`;
  }
}
