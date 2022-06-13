import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ListaDividaComponent } from "./lista-divida/lista-divida.component";

@NgModule({
    declarations: [ListaDividaComponent],
    exports:[ListaDividaComponent],
    imports:[CommonModule,
        HttpClientModule]
})
export class DividaModule{

}