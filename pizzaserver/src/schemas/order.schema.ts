import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { PizzaSchema } from './pizza.schema';
import { UserSchema } from './user.schema';

@Table
export class OrderSchema extends Model {
  @ForeignKey(() => UserSchema)
  userId: number;

  @BelongsTo(() => UserSchema)
  user: UserSchema;

  @ForeignKey(() => PizzaSchema)
  pizzaId: number;

  @BelongsTo(() => PizzaSchema)
  pizza: PizzaSchema;

  @Column
  orderCost: number;
}
