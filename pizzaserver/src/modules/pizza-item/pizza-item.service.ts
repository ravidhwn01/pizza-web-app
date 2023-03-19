import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { Transaction } from 'sequelize';
import { Repository, Sequelize } from 'sequelize-typescript';
import { PizzaItemSchema } from 'src/schemas/pizzaItem.schema';
import { CreatePizzaItemDto } from './dto/create-pizza-item.dto';
import { UpdatePizzaItemDto } from './dto/update-pizza-item.dto';

@Injectable()
export class PizzaItemService {
  private repository: Repository<PizzaItemSchema>;
  constructor(private sequelize: Sequelize) {
    this.repository = this.sequelize.getRepository(PizzaItemSchema);
  }

  create(
    createPizzaItemDto: CreatePizzaItemDto,
    transaction?: Transaction,
  ): Promise<PizzaItemSchema[]> {
    return this.repository.sequelize.transaction(
      { transaction },
      async (transaction) => {
        const bulkPizzaItemDto = _.map(
          createPizzaItemDto.ingredientIds,
          (ingredientId) => ({
            ingredientId,
            pizzaId: createPizzaItemDto.pizzaId,
          }),
        );
        return this.repository.bulkCreate(bulkPizzaItemDto, {
          transaction,
        });
      },
    );
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
