import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartSchema } from 'src/schemas/cart.schema';
import { IngredientSchema } from 'src/schemas/ingredient.schema';
import { OrderSchema } from 'src/schemas/order.schema';
import { PizzaSchema } from 'src/schemas/pizza.schema';
import { PizzaItemSchema } from 'src/schemas/pizzaItem.schema';
import { PizzaSizeSchema } from 'src/schemas/pizzaSize.schema';
import { UserSchema } from 'src/schemas/user.schema';

// connect to sequelize database postgres
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      password: 'postgres',
      username: 'postgres',
      port: 5425,
      models: [
        PizzaSchema,
        IngredientSchema,
        PizzaItemSchema,
        OrderSchema,
        UserSchema,
        CartSchema,
        PizzaSizeSchema,
      ],
      autoLoadModels: true,
    }),
  ],
})
export class DatabaseModule {}
