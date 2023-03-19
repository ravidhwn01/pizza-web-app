import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateIngredientDto {
  @IsString()
  @IsNotEmpty()
  ingredientName: string;

  @IsNumber()
  @IsNotEmpty()
  ingredientCost: number;
}
