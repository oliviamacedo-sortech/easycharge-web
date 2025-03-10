import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente } from "../model/cliente";
import { PaginaCliente } from "../model/paginaCliente";
import { retry, catchError } from 'rxjs/operators';
import { throwError } from "rxjs";

const API = 'http://localhost:8080/api/clientes'

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
        .get<PaginaCliente>(API);
    }

    deleteCLiente(cliente: Cliente){
        return this.http.delete<Cliente>(API + '/' + cliente.id,this.httpOptions)
        .pipe(retry(1), catchError(this.handleError)
        )
    }

    alterarStatus(cliente: Cliente){
      return this.http.put<Cliente>(API + '/alterarStatus/' + cliente.id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError))
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
        alert(errorMessage);
        return throwError(errorMessage);
      };
}



