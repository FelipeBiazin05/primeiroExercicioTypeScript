class Pessoa {
    nome: string;
    renda?: number;

    // Parametro opcional é sempre depois dos parametros obrigatorios

    constructor (nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} disse oi`;
    }
}

class ContaBancaria {
    protected saldo: number = 0;
    numeroConta: number;

    constructor (numeroConta: number) {
        this.numeroConta = numeroConta;
    }

    static retornaNumeroDoBanco() {
        return 125;
    }

    getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456);

ContaBancaria.retornaNumeroDoBanco()