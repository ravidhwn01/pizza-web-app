import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ICart } from 'src/interfaces/cart.interface';
import { PizzaSchema } from './pizza.schema';
import { UserSchema } from './user.schema';

@Table
export class CartSchema extends Model<ICart> {
  @ForeignKey(() => UserSchema)
  userId: number;

  @BelongsTo(() => UserSchema)
  user: UserSchema;

  @ForeignKey(() => PizzaSchema)
  pizzaId: number;

  @BelongsTo(() => PizzaSchema)
  pizza: PizzaSchema;

  @Column
  cartCost: number;
}
