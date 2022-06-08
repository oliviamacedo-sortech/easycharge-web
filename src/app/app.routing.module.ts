import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';

import { ListaClienteComponent } from "./cliente/listaCliente/listaCliente.component";


const routes: Routes = [
    { path: './cliente/listaCliente', component: ListaClienteComponent },
 //   { path: './cliente/cliente-form', component: ClienteFormComponent}
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}