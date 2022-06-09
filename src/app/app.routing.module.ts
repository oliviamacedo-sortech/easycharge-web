import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';

import { ListaClienteComponent } from "./cliente/listaCliente/listaCliente.component";
import { ListaDividaComponent } from './divida/lista-divida/lista-divida.component';


const routes: Routes = [
    { path: './cliente/listaCliente', component: ListaClienteComponent },
    { path: './divida/lista-divida', component: ListaDividaComponent }
 //   { path: './cliente/cliente-form', component: ClienteFormComponent}
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}