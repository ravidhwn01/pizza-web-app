import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class PizzaSizeSchema extends Model {
  @Column
  size: string;
  @Column
  sizeCost: number;
}
