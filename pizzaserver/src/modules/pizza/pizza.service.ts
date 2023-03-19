import { Injectable } from '@nestjs/common';
import { Transaction } from 'sequelize';
import { Repository, Sequelize } from 'sequelize-typescript';
import { PizzaSchema } from 'src/schemas/pizza.schema';
import { PizzaItemService } from '../pizza-item/pizza-item.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';

@Injectable()
export class PizzaService {
  private repository: Repository<PizzaSchema>;
  constructor(
    private sequelize: Sequelize,
    private pizzaItemService: PizzaItemService,
  ) {
    this.repository = this.sequelize.getRepository(PizzaSchema);
  }
  create(createPizzaDto: CreatePizzaDto, transaction?: Transaction) {
    return this.repository.sequelize.transaction(
      { transaction },
      async (transaction) => {
        const { ingredientIds, ...pizzaDto } = createPizzaDto;
        const pizza = await this.repository.create(pizzaDto, {
          transaction,
        });

        const pizzaItem = await this.pizzaItemService.create(
          {
            ingredientIds,
            pizzaId: pizza.id,
          },
          transaction,
        );

        return {
          ...pizza,
          pizzaItems: [...pizzaItem],
        };
      },
    );
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

  update(id: number, updatePizzaDto: UpdatePizzaDto) {
    return this.repository.update(updatePizzaDto, {
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
