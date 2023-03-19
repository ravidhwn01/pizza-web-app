import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CartModule } from './modules/cart/cart.module';
import { IngredientModule } from './modules/ingredient/ingredient.module';
import { OrderModule } from './modules/order/order.module';
import { PizzaItemModule } from './modules/pizza-item/pizza-item.module';
import { PizzaSizeModule } from './modules/pizza-size/pizza-size.module';
import { PizzaModule } from './modules/pizza/pizza.module';
import { PizzaService } from './modules/pizza/pizza.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    PizzaModule,
    DatabaseModule,
    PizzaItemModule,
    IngredientModule,
    OrderModule,
    UserModule,
    CartModule,
    PizzaSizeModule,
  ],
  controllers: [AppController],
  providers: [AppService, PizzaService],
})
export class AppModule {}
