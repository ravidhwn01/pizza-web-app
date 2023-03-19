import { PartialType } from '@nestjs/mapped-types';
import { CreatePizzaItemDto } from './create-pizza-item.dto';

export class UpdatePizzaItemDto extends PartialType(CreatePizzaItemDto) {}
