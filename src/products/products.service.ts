import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';
@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProductDto: CreateProductDto) {
    return await this.prisma.product.create({
      data: createProductDto,
    });
  }

  async findAll() {
    return this.prisma.product.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const user = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`producto de ID: ${id} no encontrado`);
    }
    return user;
  }

  async update(id: number, UpdateProductDto: UpdateProductDto) {
    return await this.prisma.product.update({
      where: { id },
      data: UpdateProductDto,
    });
  }

  async remove(id: number) {
    const user = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`producto de ID: ${id} no encontrado`);
    }
    return await this.prisma.product.delete({
      where: { id },
    });
  }
}
