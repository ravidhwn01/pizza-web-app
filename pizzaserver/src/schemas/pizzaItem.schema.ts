import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { IPizzaItem } from 'src/interfaces/pizzaItem.interface';
import { IngredientSchema } from './ingredient.schema';
import { PizzaSchema } from './pizza.schema';

@Table
export class PizzaItemSchema extends Model<IPizzaItem> {
  @ForeignKey(() => PizzaSchema)
  pizzaId: number;

  @BelongsTo(() => PizzaSchema)
  pizza: PizzaSchema;

  @ForeignKey(() => IngredientSchema)
  ingredientId: number;

  @BelongsTo(() => IngredientSchema)
  ingredient: IngredientSchema;
}
