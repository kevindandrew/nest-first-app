import { describe, it, expect } from 'vitest';

function calcularDescuentos(precio: number, porcentaje: number): number {
  return precio - (precio * porcentaje) / 100;
}

function esPasswordSeguro(password: string): boolean {
  return password.length >= 6;
}

describe('Calcular Descuento', () => {
  it('debemos aplicar un descuento del 10% al precio original', () => {
    const resultado = calcularDescuentos(100, 10);
    expect(resultado).toBe(90);
  });
  it('debemos aplicar un descuento del 50% al precio original', () => {
    const resultado = calcularDescuentos(3500, 50);
    expect(resultado).toBe(1750);
  });
});

/* 
    crear 2 funciones  3 test unitarios
*/
