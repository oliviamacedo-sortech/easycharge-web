import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';


@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cadastroClienteForm: FormGroup

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private clienteService: ClienteService
  ) {
    this.cadastroClienteForm = formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      profissao: ['', Validators.required],
      renda: ['', Validators.required],
      status: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required]
      });
   }

  ngOnInit() {
  }

  salvaCliente(){
    const cliente: Cliente = this.cadastroClienteForm.getRawValue();


        this.clienteService.salvaCliente(cliente)
            .subscribe(() => this.router.navigate(['cliente']))
  }

  listaCliente(){
    this.router.navigate(['cliente']);
}

}
