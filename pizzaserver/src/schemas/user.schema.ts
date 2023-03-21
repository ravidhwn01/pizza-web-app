import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { IUser } from 'src/interfaces/user.interface';
import { CartSchema } from './cart.schema';
import { OrderSchema } from './order.schema';

@Table
export class UserSchema extends Model<IUser> {
  @Column
  userName: string;

  @Column
  email: string;

  @Column
  password: string;

  @HasMany(() => CartSchema)
  carts: CartSchema[];

  @HasMany(() => OrderSchema)
  orders: OrderSchema[];
}
