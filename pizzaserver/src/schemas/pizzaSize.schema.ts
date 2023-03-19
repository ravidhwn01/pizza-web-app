import { Column, Model, Table } from 'sequelize-typescript';
import { IPizzaSize } from 'src/interfaces/pizzaSize.interface';

@Table
export class PizzaSizeSchema extends Model<IPizzaSize> {
  @Column
  size: string;
  @Column
  sizeCost: number;
}
