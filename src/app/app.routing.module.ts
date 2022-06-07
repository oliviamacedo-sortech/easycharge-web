import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaClienteComponent } from "./cliente/listaCliente/listaCliente.component";


const routes: Routes = [
    { path: './cliente/listaCliente', component: ListaClienteComponent },
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}