import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente(`Ricardo`, 12345678912);
const cliente2 = new Cliente('Alice', 98765432198);

const conta1 = new ContaCorrente(1001, cliente1);

// conta1._saldo = 0;
// conta1.agencia = 1001;
// conta1.cliente = cliente1;

const conta2 = new ContaCorrente(102, cliente2);

// conta2._saldo = 0;
// conta2.agencia = 102;
// conta2.cliente = cliente2;


const valorDepositado = conta1.depositar(200);
console.log(`O valor depositado foi de R$ ${valorDepositado}`)
console.log(`O saldo atual é de R$ ${conta1._saldo}`);

const valorSacado = conta1.sacar(50);
console.log(`Valor sacado foi de R$ ${valorSacado}`);
console.log(`O saldo atual é de R$ ${conta1._saldo}`);

conta1.transferir(50, conta2);


console.log();
console.log("----------------------------------------------------------------")
console.log();

console.log(conta1);

console.log();
console.log("----------------------------------------------------------------")
console.log();

console.log(conta2);