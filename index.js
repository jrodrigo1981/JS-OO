import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente();
const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

cliente1.nome = 'Ricardo';
cliente1.cpf = 12345678912;

console.log(cliente1)

const valorDepositado = contaCorrenteRicardo.depositar(200);
console.log(`O valor depositado foi de R$ ${valorDepositado}`)
console.log(`O saldo atual é de R$ ${contaCorrenteRicardo._saldo}`);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(`Valor sacado foi de R$ ${valorSacado}`);
console.log(`O saldo atual é de R$ ${contaCorrenteRicardo._saldo}`);



const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 98765432198;

