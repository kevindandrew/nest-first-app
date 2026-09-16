class Animal {
  constructor(
    public especie: string,
    public skin: string,
  ) {}
}

class Perro extends Animal {
  constructor(public nombre: string) {
    super('caninos', 'pelo natural');
  }

  ladrar() {
    return `${this.nombre} dice : waf waf waf`;
  }
}

class Huskies extends Perro {
  constructor(public tipoAullido: string) {
    super('Snoopy');
  }
}

const miPerrito = new Perro('Cookie');
console.log(miPerrito.nombre); // cookie
console.log(miPerrito.ladrar()); // cookie dice :waf waf waf

const miHuskie = new Huskies('waf waf waf');
console.log(miHuskie.tipoAullido);
