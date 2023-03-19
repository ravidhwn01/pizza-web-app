import { Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { IngredientSchema } from 'src/schemas/ingredient.schema';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';

@Injectable()
export class IngredientService {
  // it gives access to perform operation on given schema
  private repository: Repository<IngredientSchema>;
  constructor(private sequelize: Sequelize) {
    this.repository = this.sequelize.getRepository(IngredientSchema);
  }

  create(createIngredientDto: CreateIngredientDto) {
    return this.repository.create(createIngredientDto);
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

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return this.repository.update(updateIngredientDto, {
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
