import { IsNumber } from 'class-validator';

export class CreatePizzaItemDto {
  @IsNumber({}, { each: true })
  ingredientIds: number[];

  @IsNumber()
  pizzaId: number;
}
