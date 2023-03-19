import { Injectable } from '@nestjs/common';
import { CreatePizzaSizeDto } from './dto/create-pizza-size.dto';
import { UpdatePizzaSizeDto } from './dto/update-pizza-size.dto';

@Injectable()
export class PizzaSizeService {
  create(createPizzaSizeDto: CreatePizzaSizeDto) {
    return 'This action adds a new pizzaSize';
  }

  findAll() {
    return `This action returns all pizzaSize`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pizzaSize`;
  }

  update(id: number, updatePizzaSizeDto: UpdatePizzaSizeDto) {
    return `This action updates a #${id} pizzaSize`;
  }

  remove(id: number) {
    return `This action removes a #${id} pizzaSize`;
  }
}
