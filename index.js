import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";


const cliente1 = new Cliente(`Ricardo`, 12345678912);
const conta1 = new ContaCorrente(1001, cliente1, 1001);


const valorDepositado = conta1.depositar(500);
const valorSacado = conta1.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(conta1);

console.log(contaPoupanca);

// const conta2 = new Conta(0, cliente1, 10001);
// console.log(conta2);