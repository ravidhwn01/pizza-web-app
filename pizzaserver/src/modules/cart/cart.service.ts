import { Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { CartSchema } from 'src/schemas/cart.schema';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  private repository: Repository<CartSchema>;
  constructor(private sequelize: Sequelize) {
    this.repository = this.sequelize.getRepository(CartSchema);
  }

  create(createCartDto: CreateCartDto) {
    return this.repository.create(createCartDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return this.repository.update(updateCartDto, {
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.repository.destroy({
      where: {
        id,
      },
    });
  }
}
