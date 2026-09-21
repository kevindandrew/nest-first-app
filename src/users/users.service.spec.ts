import { describe, it, expect } from 'vitest';
import { UsersService } from './users.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { TestingModule, Test } from '@nestjs/testing';

describe('UserService', () => {
  let service: UsersService;
  // El mock una copia falsa de prisma q solo vive en la memoria
  const prismaFalso = {
    user: {
      findMany: vi.fn(),
    },
  };
  beforeEach(async () => {
    const modulo: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: prismaFalso,
        },
      ],
    }).compile();
    service = modulo.get<UsersService>(UsersService);
  });
  it('debe devolver la lista de usuarios Simulada', async () => {
    const listaFalsa = [
      { id: 1, name: 'kevin', email: 'kevinfunval@gmail.com' },
      { id: 2, name: 'jeremy', email: 'jeremyfunval@gmail.com' },
      { id: 3, name: 'jared', email: 'jaredfunval@gmail.com' },
      { id: 4, name: 'gi', email: 'gi123funval@gmail.com' },
    ];
    prismaFalso.user.findMany.mockResolvedValue(listaFalsa);

    const resultado = await service.findAll();

    expect(resultado).toEqual(listaFalsa);
  });
});
