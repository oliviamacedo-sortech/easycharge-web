import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente } from "./cliente";
import { PaginaCliente } from "./paginaCliente";
import { retry, catchError } from 'rxjs/operators';
import { throwError } from "rxjs";

const API = 'http://localhost:8080'

@Injectable({providedIn: 'root'})
export class ClienteService {

    constructor( private http: HttpClient){
        this.http = http;
    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }

    listarClientes(){
        return this.http
        .get<PaginaCliente>(API + '/api/clientes');
    }

    deleteCLiente(cliente: Cliente){
        return this.http.delete<Cliente>(API + '/api/clientes' + '/' + cliente.id,this.httpOptions)
        .pipe(retry(1), catchError(this.handleError)
        )
    }

    
    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Erro ocorreu no lado do client
          errorMessage = error.error.message;
        } else {
          // Erro ocorreu no lado do servidor
          errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      };
}



