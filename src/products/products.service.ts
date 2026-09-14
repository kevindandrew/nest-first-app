import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';
@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProductDto: CreateProductDto) {
    try {
      return await this.prisma.product.create({
        data: createProductDto,
      });
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return this.prisma.product.findMany({
        orderBy: { id: 'asc' },
      });
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.prisma.product.findUnique({
        where: { id },
      });
      if (!user) {
        throw new NotFoundException(`producto de ID: ${id} no encontrado`);
      }
      return user;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, UpdateProductDto: UpdateProductDto) {
    try {
      return await this.prisma.product.update({
        where: { id },
        data: UpdateProductDto,
      });
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const user = await this.prisma.product.findUnique({
        where: { id },
      });
      if (!user) {
        throw new NotFoundException(`producto de ID: ${id} no encontrado`);
      }
      return await this.prisma.product.delete({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }
}
