class Retangulo {
    l1: number = 0;
    l2: number = 0;
    calcularPerimetro(): number {
        return (this.l1 + this.l2)*2;
    }
}

let retangulo : Retangulo = new Retangulo();
retangulo.l1 = 10;
retangulo.l2 = 20;
console.log(retangulo.calcularPerimetro())