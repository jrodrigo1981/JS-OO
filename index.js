import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./Funcionarios/SistemaAutenticacao.js";


const diretor = new Diretor("Rodrigo", 10000, 1245789631);
const gerente = new Gerente("Ricardo", 5000, 85296374123);

diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("123");

const cliente = new Cliente("Carlos", 5289874598, "124578");


const diretorLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteLogado = SistemaAutenticacao.login(gerente, "123");
const clienteLogado = SistemaAutenticacao.login(cliente, "124578");


console.log(diretorLogado, gerenteLogado, clienteLogado);


