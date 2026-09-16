import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';

@Module({
  imports: [], // Otros modulos que este modulo necesita para funcionar
  controllers: [UsersController], //controladores que pertenecen a este modulo
  providers: [UsersService], // servicios que se púeden inyectar dentro de este modulo
  exports: [UsersService], //Servicios que quieres "Prestar" a otros modulos
})
export class UsersModule {}
