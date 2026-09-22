import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
} from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'adminfunval@gmail.com',
    description: 'el correo del usuario a ser logeado',
  })
  @IsEmail({}, { message: 'el email debe estar en el formato correcto' })
  @IsNotEmpty({ message: 'el email es obligatorio' })
  email: string;
  @ApiProperty({
    example: 'contraseña',
    description: 'la contraseña del usuario a ser logeado',
  })
  @IsString({ message: 'password debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'password es obligatorio' })
  @MinLength(6, { message: 'la contraseña debe tener almenos 6 caracteres' })
  @Matches(/\S/, {
    message: 'La contraseña no puede contener solo espacios',
  })
  password: string;
}
