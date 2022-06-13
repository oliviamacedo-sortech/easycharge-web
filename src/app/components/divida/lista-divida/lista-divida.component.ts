import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Divida } from 'src/app/model/divida';
import { DividaService } from 'src/app/service/divida.service';



@Component({
  selector: 'ec-lista-divida',
  templateUrl: './lista-divida.component.html',
  styleUrls: ['./lista-divida.component.css']
})
export class ListaDividaComponent implements OnInit {

  dividas: Divida[] = [{
    id: '',
    dataAbertura: '',
    dataQuitacao: '',
    descricaoQuitacao: '',
    status: '',
    valor: '',
    IdCliente: '' 

  }];

  constructor(private dividaService: DividaService, private router: Router) { }

  ngOnInit(): void {
    this.getDividas()
  }

  getDividas(){
    this.dividaService.listaDividas().subscribe(paginaDivida => this.dividas = paginaDivida.content)
  }

}
