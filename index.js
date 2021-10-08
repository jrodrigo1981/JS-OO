import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./Funcionarios/SistemaAutenticacao.js";


const diretor = new Diretor("Rodrigo", 10000, 1245789631);
const gerente = new Gerente("Ricardo", 5000, 85296374123);

diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("123");

const estaLogado = SistemaAutenticacao.login(diretor, "123456");
const estaLogado1 = SistemaAutenticacao.login(gerente, "123");

console.log(estaLogado);
console.log(estaLogado1);

