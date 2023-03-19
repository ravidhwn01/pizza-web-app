import { Column, HasMany, Model, Table } from 'sequelize-typescript';

@Table
export class IngredientSchema extends Model {
  @Column
  ingredientName: string;

  @Column
  ingredientCost: number;
}
