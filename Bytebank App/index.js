import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";



const cliente1 = new Cliente("William", "02516072082");
const cliente2 = new Cliente("Adrielly", "44142688235");


const conta1 = new ContaCorrente("0244", cliente1);
conta1.depositar(500);

const conta2 = new ContaCorrente("0575", cliente2);
conta2.depositar(100);


console.log(conta1);
console.log(conta2);

console.log("===========================================================================");


conta1.transferir(100, conta2);

console.log(conta1);
console.log("===========================================================================");
console.log(conta2);


