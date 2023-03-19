import { IsNotEmpty, IsNumber, isNumber, IsString } from 'class-validator';

export class CreatePizzaSizeDto {
  @IsString()
  @IsNotEmpty()
  size: string;

  @IsNumber()
  @IsNotEmpty()
  sizeCost: number;
}
