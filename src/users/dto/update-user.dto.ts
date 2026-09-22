import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto.js';

export class UpdateUserDto extends PartialType(CreateUserDto) {} //hereda todo lo del create pero q ya no obligatorio
