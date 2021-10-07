import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente(`Ricardo`, 12345678912);
const cliente2 = new Cliente('Alice', 98765432198);

const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(102, cliente2);

const valorDepositado = conta1.depositar(200);

const valorSacado = conta1.sacar(50);

conta1.transferir(50, conta2);


console.log();
console.log("----------------------------------------------------------------")
console.log();

console.log(conta1);

console.log();
console.log("----------------------------------------------------------------")
console.log();

console.log(conta2);

console.log();
console.log("----------------------------------------------------------------")
console.log();

console.log(`Total de contas abertas: ${ContaCorrente.numerosDeContas}`);
