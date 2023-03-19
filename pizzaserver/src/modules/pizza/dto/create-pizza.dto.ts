import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePizzaDto {
  @IsNumber()
  @IsNotEmpty()
  pizzaSizeId: number;

  @IsNumber()
  @IsNotEmpty()
  pizzaCost: number;
}
