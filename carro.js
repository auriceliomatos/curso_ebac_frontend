//----------------------Classe Abstrata: Veiculo
class Veiculo {
    constructor(marca, modelo) {
       
        this.marca = marca;
        this.modelo = modelo;
    }

    info() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
}

//---------------------Classe Herdeira: Carro

class Carro extends Veiculo {
    constructor(marca, modelo, numeroDePortas) {
        super(marca, modelo);
        this.numeroDePortas = numeroDePortas;
    }

    info() {
        return `${super.info()}, Número de portas: ${this.numeroDePortas}`;
    }
}

//----------------------Classe Herdeira: Caminhao

class Caminhao extends Veiculo {
    constructor(marca, modelo, capacidadeCarga) {
        super(marca, modelo);
        this.capacidadeCarga = capacidadeCarga; // em toneladas
    }

    info() {
        return `${super.info()}, Capacidade de carga: ${this.capacidadeCarga} toneladas`;
    }
}

//----------------------Classe Herdeira: Bicicleta

class Bicicleta extends Veiculo {
    constructor(marca, modelo, tipo) {
        super(marca, modelo);
        this.tipo = tipo;
    }

    info() {
        return `${super.info()}, Tipo: ${this.tipo}`;
    }
}


// ---------- Instâncias de Objetos

const carro1 = new Carro("Toyota", "Corolla", 4);
const carro2 = new Carro("Honda", "Civic", 4);
const caminhao1 = new Caminhao("Volvo", "FH", 18);
const bicicleta1 = new Bicicleta("Caloi", "Aro 26", "Mountain");


console.log(carro1.info()); 
console.log(carro2.info()); 
console.log(bicicleta1.info()); 
console.log(caminhao1.info());
