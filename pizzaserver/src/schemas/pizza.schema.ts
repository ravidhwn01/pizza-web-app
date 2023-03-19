import {
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { IngredientSchema } from './ingredient.schema';
import { PizzaItemSchema } from './pizzaItem.schema';
import { PizzaSizeSchema } from './pizzaSize.schema';

@Table
export class PizzaSchema extends Model {
  @ForeignKey(() => PizzaSizeSchema)
  pizzaSizeId: number;

  @BelongsTo(() => PizzaSizeSchema)
  pizzaSize: PizzaSchema;

  @Column
  pizzaCost: number;

  @BelongsToMany(() => IngredientSchema, {
    through: () => PizzaItemSchema,
  })
  ingredients: IngredientSchema[];
}
