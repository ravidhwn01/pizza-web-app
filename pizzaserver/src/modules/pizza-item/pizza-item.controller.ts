import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PizzaItemService } from './pizza-item.service';
import { CreatePizzaItemDto } from './dto/create-pizza-item.dto';
import { UpdatePizzaItemDto } from './dto/update-pizza-item.dto';

@Controller('pizza-item')
export class PizzaItemController {
  constructor(private readonly pizzaItemService: PizzaItemService) {}

  @Post()
  create(@Body() createPizzaItemDto: CreatePizzaItemDto) {
    return this.pizzaItemService.create(createPizzaItemDto);
  }

  @Get()
  findAll() {
    return this.pizzaItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pizzaItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePizzaItemDto: UpdatePizzaItemDto) {
    return this.pizzaItemService.update(+id, updatePizzaItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pizzaItemService.remove(+id);
  }
}
