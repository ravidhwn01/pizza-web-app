import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { CartSchema } from './cart.schema';
import { OrderSchema } from './order.schema';

@Table
export class UserSchema extends Model {
  @Column
  userName: string;

  @Column
  password: string;

  @HasMany(() => CartSchema)
  carts: CartSchema[];

  @HasMany(() => OrderSchema)
  orders: OrderSchema[];
}
