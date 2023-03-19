import { Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { PizzaSizeSchema } from 'src/schemas/pizzaSize.schema';
import { CreatePizzaSizeDto } from './dto/create-pizza-size.dto';
import { UpdatePizzaSizeDto } from './dto/update-pizza-size.dto';

@Injectable()
export class PizzaSizeService {
  private repository: Repository<PizzaSizeSchema>;
  constructor(private sequelize: Sequelize) {
    this.repository = this.sequelize.getRepository(PizzaSizeSchema);
  }
  create(createPizzaSizeDto: CreatePizzaSizeDto) {
    return this.repository.create(createPizzaSizeDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updatePizzaSizeDto: UpdatePizzaSizeDto) {
    return this.repository.update(updatePizzaSizeDto, {
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.repository.destroy({
      where: {
        id,
      },
    });
  }
}
