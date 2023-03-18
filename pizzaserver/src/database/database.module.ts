import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PizzaSchema } from 'src/schemas/pizza.schema';

// connect to sequelize database postgres
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      password: 'postgres',
      username: 'postgres',
      port: 5425,
      models: [PizzaSchema],
      autoLoadModels: true,
    }),
  ],
})
export class DatabaseModule {}
