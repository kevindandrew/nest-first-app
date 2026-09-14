import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Kevin Rodriguez',
      email: 'kevinfunval@gmail.com',
      password: '123456789',
    },
    {
      id: 2,
      name: 'Jeremy Vargas',
      email: 'jeremyfunval@gmail.com',
      password: '987654321',
    },
    {
      id: 3,
      name: 'Jose Pelico',
      email: 'josefunval@gmail.com',
      password: '33jaja223322',
    },
  ];
  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`Usuario con id ${id} NO ENCONTRADO`);
    }
    return user;
  }

  /* update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  } */

  remove(id: number) {
    const user = this.users.filter((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`Usuario con id ${id} NO ENCONTRADO`);
    }
    this.users = this.users.filter((u) => u.id !== id);
    return 'Usuario Eliminado exitosamente ';
  }
}
