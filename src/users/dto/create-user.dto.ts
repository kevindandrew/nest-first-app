import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
  IsOptional,
  IsEnum,
} from 'class-validator';

import { Role } from '../../generated/prisma/enums.js';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({
    example: 'Juan Perez',
    description: 'el nombre del usuario a ser creado',
  })
  @IsString({ message: 'el nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'el nombre es obligatorio' })
  @MinLength(2, { message: 'El nombre debe tener almenos 2 caracteres' })
  @Matches(/\S/, {
    message: 'El nombre  no puede contener solo espacios',
  })
  name: string;
  @ApiProperty({
    example: 'juanfunval@gmail.com',
    description: 'el correo del usuario a ser creado',
  })
  @IsEmail({}, { message: 'el email debe estar en el formato correcto' })
  @IsNotEmpty({ message: 'el email es obligatorio' })
  email: string;
  @ApiProperty({
    example: 'funval2025',
    description: 'la contraseña del usuario a ser creado',
  })
  @IsString({ message: 'password debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'password es obligatorio' })
  @MinLength(6, { message: 'la contraseña debe tener almenos 6 caracteres' })
  @Matches(/\S/, {
    message: 'La contraseña no puede contener solo espacios',
  })
  password: string;
  @ApiProperty({
    example: 'USER',
    description: 'el ROL del usuario a ser creado',
  })
  @IsOptional()
  @IsEnum(Role, { message: 'El rol debe ser ADMIN o USER' })
  role?: Role;
}
