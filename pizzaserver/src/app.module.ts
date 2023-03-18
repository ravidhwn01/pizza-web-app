import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PizzaModule } from './pizza/pizza.module';
import { PizzaService } from './pizza/pizza.service';

@Module({
  imports: [PizzaModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, PizzaService],
})
export class AppModule {}
