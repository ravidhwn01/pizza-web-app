import { NUMBER, STRING } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class PizzaSchema extends Model {
  @Column
  imgUrl: string;

  @Column
  pizzaName: string;

  @Column
  pizzaPrice: number;
}
