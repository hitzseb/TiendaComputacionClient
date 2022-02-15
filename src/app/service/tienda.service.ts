import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/componente';
import { Sucursal } from '../interfaces/sucursal';
import { Vendedor } from '../interfaces/vendedor';
import { Venta } from '../interfaces/venta';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
}

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  private apiUrl = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  // FUNCIONES CRUD

  // componentes

  getComponentes(): Observable<Componente[]> {
    return this.http.get<Componente[]>(this.apiUrl + "componentes");
  }

  // sucursales

  getSucursales(): Observable<Sucursal[]> {
    return this.http.get<Sucursal[]>(this.apiUrl + "sucursales");
  }

  // vendedores

  getVendedores(): Observable<Vendedor[]> {
    return this.http.get<Vendedor[]>(this.apiUrl + "vendedores");
  }

  // Venta

  getVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.apiUrl + "ventas");
  }

  saveVenta(data: any) {
    return this.http.post(this.apiUrl + "venta", data).subscribe();
  }

  deleteVenta(id: number): Observable<{}> {
    return this.http.delete(this.apiUrl + "ventas/" + `${id}`);
  }

}
