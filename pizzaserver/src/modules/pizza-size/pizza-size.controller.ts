import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PizzaSizeService } from './pizza-size.service';
import { CreatePizzaSizeDto } from './dto/create-pizza-size.dto';
import { UpdatePizzaSizeDto } from './dto/update-pizza-size.dto';

@Controller('pizza-size')
export class PizzaSizeController {
  constructor(private readonly pizzaSizeService: PizzaSizeService) {}

  @Post()
  create(@Body() createPizzaSizeDto: CreatePizzaSizeDto) {
    return this.pizzaSizeService.create(createPizzaSizeDto);
  }

  @Get()
  findAll() {
    return this.pizzaSizeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pizzaSizeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePizzaSizeDto: UpdatePizzaSizeDto) {
    return this.pizzaSizeService.update(+id, updatePizzaSizeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pizzaSizeService.remove(+id);
  }
}
