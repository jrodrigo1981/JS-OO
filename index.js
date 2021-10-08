import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";



const cliente1 = new Cliente(`Ricardo`, 12345678912);
const conta1 = new ContaCorrente(1001, cliente1, 1001);


const valorDepositado = conta1.depositar(500);
const valorSacado = conta1.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(conta1);

console.log(contaPoupanca);

const contasalario = new ContaSalario(cliente1);
contasalario.depositar(200);
contasalario.sacar(50);

console.log(contasalario);