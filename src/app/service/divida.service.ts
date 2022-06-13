import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PaginaDivida } from "./paginaDivida";

const API = 'http://localhost:8080/api/dividas'

@Injectable({providedIn: 'root'})
export class DividaService {
    constructor( private http: HttpClient){
        this.http = http;
    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }

    listaDividas(){
        return this.http
        .get<PaginaDivida>(API);
    }
}