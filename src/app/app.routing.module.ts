import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClienteComponent } from './components/cliente/listaCliente/listaCliente.component';
import { ListaDividaComponent } from './components/divida/lista-divida/lista-divida.component';



const routes: Routes = [
    { path: './components/cliente/listaCliente', component: ListaClienteComponent },
    { path: './components/divida/lista-divida', component: ListaDividaComponent }
 //   { path: './cliente/cliente-form', component: ClienteFormComponent}
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}