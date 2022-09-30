import { Cliente } from "./Cliente.js";

export class ContaCorrente {

    static numeroDeContas = 0;
    agencia;
    _saldo = 0;
    _cliente;


    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas++
    }

//---------------

    set cliente(novoValor){
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }
    
    get cliente(){
        return this._cliente
    }


    get saldo(){
        return this._saldo;
    }

 //--------------   

    depositar(valor) {
        if (valor <= 0){
            return;
        } else {
            this._saldo += valor;
        }
    }
    

    sacar(valor) {
        if (this._saldo < valor){
            console.log ("SALDO INSUFICIENTE PARA SACAR");
            return;
        } else {
            this._saldo -= valor;
            return valor;
        }
    }


    transferir(valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    }

}

