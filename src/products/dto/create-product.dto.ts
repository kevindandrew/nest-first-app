import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
  IsNumber,
  IsPositive,
  IsOptional,
  IsInt,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
export class CreateProductDto {
  @IsString({ message: 'el nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'el nombre es obligatorio' })
  @MinLength(2, { message: 'El nombre debe tener almenos 2 caracteres' })
  @Matches(/\S/, {
    message: 'El nombre  no puede contener solo espacios',
  })
  name: string;
  @Type(() => Number)
  @IsNotEmpty({ message: 'el precio es obligatorio' })
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'EL PRECIO DEBE SER UN NUMERO CON HASTA 2 DECIMALES' },
  )
  @IsPositive({ message: 'el precio debe ser positivo' })
  price: number;
  @IsOptional()
  @IsString({ message: 'la descripcion debe ser una cadena de texto' })
  @MinLength(2, { message: 'la descripcion debe tener almenos 2 caracteres' })
  @Matches(/\S/, {
    message: 'la descripcion  no puede contener solo espacios',
  })
  description?: string;
  @Type(() => Number)
  @IsInt({ message: 'el stock debe ser un numero entero ' })
  @Min(0, { message: 'el stock no puede ser negativo' })
  stock: number;
}
