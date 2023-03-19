import { Column, Model, Table } from 'sequelize-typescript';
import { IIngredient } from 'src/interfaces/ingedients.interface';

@Table
export class IngredientSchema extends Model<IIngredient> {
  @Column
  ingredientName: string;

  @Column
  ingredientCost: number;
}
