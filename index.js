import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";


const cliente1 = new Cliente(`Ricardo`, 12345678912);
const conta1 = new Conta(1001, cliente1, 1001);


const valorDepositado = conta1.depositar(500);
const valorSacado = conta1.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 1001);

console.log(conta1);

console.log(contaPoupanca);