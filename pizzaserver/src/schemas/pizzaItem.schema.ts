import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { IngredientSchema } from './ingredient.schema';
import { PizzaSchema } from './pizza.schema';

@Table
export class PizzaItemSchema extends Model {
  @ForeignKey(() => PizzaSchema)
  pizzaId: number;

  @BelongsTo(() => PizzaSchema)
  pizza: PizzaSchema;

  @ForeignKey(() => IngredientSchema)
  ingredientId: number;

  @BelongsTo(() => IngredientSchema)
  ingredient: IngredientSchema;
}
