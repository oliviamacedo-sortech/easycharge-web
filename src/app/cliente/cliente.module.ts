import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListaClienteComponent } from "./listaCliente/listaCliente.component";

@NgModule({
    declarations: [ListaClienteComponent],
    exports:[ListaClienteComponent],
    imports:[CommonModule]
})
export class ClienteModule{

}