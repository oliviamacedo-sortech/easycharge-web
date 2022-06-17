import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ListaClienteComponent } from "./listaCliente/listaCliente.component";
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [ListaClienteComponent, ClienteFormComponent],
    exports:[ListaClienteComponent],
    imports:[CommonModule,
        HttpClientModule,
        ReactiveFormsModule]
})
export class ClienteModule{

}