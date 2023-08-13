class circulo{
    raio: number = 0;

    calcularArea(): number{
        return (3.14*(this.raio)**2);
    }

    calcularPerimetro(): number{
        return (2*this.raio*3.14);
    }
}

let circulo1: circulo = new circulo();
circulo1.raio = 5;

console.log(circulo1.calcularArea())
console.log(circulo1.calcularPerimetro())