import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './components/cliente/cliente-form/cliente-form.component';
import { ListaClienteComponent } from './components/cliente/listaCliente/listaCliente.component';
import { ListaDividaComponent } from './components/divida/lista-divida/lista-divida.component';



const routes: Routes = [
    { path: 'cliente', component: ListaClienteComponent },
    { path: 'divida', component: ListaDividaComponent },
    { path: 'cadastroCliente', component: ClienteFormComponent}



]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}