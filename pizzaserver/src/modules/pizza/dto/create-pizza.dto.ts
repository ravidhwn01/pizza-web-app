import { IsNotEmpty, isNumber, IsNumber } from 'class-validator';

export class CreatePizzaDto {
  @IsNumber()
  @IsNotEmpty()
  pizzaSizeId: number;

  @IsNumber()
  @IsNotEmpty()
  pizzaCost: number;

  @IsNumber({}, { each: true })
  ingredientIds: number[];
}
