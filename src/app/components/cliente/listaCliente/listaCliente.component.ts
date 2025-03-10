import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "src/app/model/cliente";
import { ClienteService } from "src/app/service/cliente.service";

@Component({
    selector: 'ec-listaCliente',
    templateUrl: 'listaCliente.component.html'
})

export class ListaClienteComponent implements OnInit{

    clientes: Cliente[] = [{
        id: '',
        cpf: '',
        telefone: '',
        statusDivida: '',
        email: '',
        renda: '',
        local: ''  
    }];

    constructor(private clienteService: ClienteService, private router: Router){}

    ngOnInit(): void {
        this.getClientes()
    }

    getClientes(){
        this.clienteService
        .listarClientes()
        .subscribe(paginaCliente => this.clientes = paginaCliente.content)
    }

    deleteCliente(cliente: Cliente){
        this.clienteService.deleteCLiente(cliente).subscribe(() => {this.getClientes()});
        
    }

    alterarStatus(cliente: Cliente){
        this.clienteService.alterarStatus(cliente).subscribe(() => {this.getClientes()});
    }

}