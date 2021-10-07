import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numerosDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numerosDeContas += 1;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
        
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
    

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        } 
        this._saldo += valor; 
        return valor;
        
    }

    transferir(valor, conta){
        if(valor <= this._saldo){
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
            return valorSacado;
        }
        
    }
}