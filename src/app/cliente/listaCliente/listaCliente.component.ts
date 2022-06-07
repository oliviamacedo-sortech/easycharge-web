import { Component, OnInit } from "@angular/core";
import { Cliente } from "./cliente";
import { ClienteService } from "./cliente.service";

@Component({
    selector: 'ec-listaCliente',
    templateUrl: 'listaCliente.component.html'
})

export class ListaClienteComponent implements OnInit{

    clientes: Cliente[] = [{
        id: '',
        cpf: '',
        telefone: '',
        status: '',
        email: '',
        profissao: '',
        renda: '',
        local: ''  
    }];

    constructor(private clienteService: ClienteService){}

    ngOnInit(): void {
        this.clienteService
        .listarClientes()
        .subscribe(paginaCliente => this.clientes = paginaCliente.content)
    }
}