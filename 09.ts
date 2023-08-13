class situacaoFinanceira{
    valorCreditos: number = 0;
    valorDebitos: number = 0;

    calcularSaldo(): number{
        return (this.valorCreditos - this.valorDebitos);
    }

}

let situacaoFinanceira_1: situacaoFinanceira = new situacaoFinanceira();
situacaoFinanceira_1.valorCreditos = 1000;
situacaoFinanceira_1.valorDebitos = 500;

console.log(situacaoFinanceira_1.calcularSaldo())