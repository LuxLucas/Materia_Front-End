class Carro{
    constructor(marca, modelo){
        this.modelo = modelo;
        this.marca  = marca;
    }

    detalhes(){
        return `Carro: ${this.marca} | ${this.modelo}`;
    }
}

module.exports = Carro;