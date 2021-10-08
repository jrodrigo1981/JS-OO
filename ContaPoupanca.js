import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(saldoInicial, cliente, agencia){   
        super(saldoInicial, cliente, agencia);     
    }

    //Sobrescrevendo o metodo sacar da classe mãe.
    sacar(valor){
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}