import { Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { PizzaSchema } from 'src/schemas/pizza.schema';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';

@Injectable()
export class PizzaService {
  private repository: Repository<PizzaSchema>;
  constructor(private sequelize: Sequelize) {
    this.repository = this.sequelize.getRepository(PizzaSchema);
  }
  create(createPizzaDto: CreatePizzaDto) {
    return this.repository.create(createPizzaDto);
  }

  findAll() {
    return `This action returns all pizza`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pizza`;
  }

  update(id: number, updatePizzaDto: UpdatePizzaDto) {
    return `This action updates a #${id} pizza`;
  }

  remove(id: number) {
    return `This action removes a #${id} pizza`;
  }
}
