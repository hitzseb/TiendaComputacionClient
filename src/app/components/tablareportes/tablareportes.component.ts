import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/service/tienda.service';
import { Venta } from 'src/app/interfaces/venta';
import { Componente } from 'src/app/interfaces/componente';
import { Vendedor } from 'src/app/interfaces/vendedor';

@Component({
  selector: 'app-tablareportes',
  templateUrl: './tablareportes.component.html',
  styleUrls: ['./tablareportes.component.css']
})
export class TablareportesComponent implements OnInit {

  ventas: Venta[] = [];
  componentes: Componente[] = [];
  vendedores: Vendedor[] = [];

  constructor(private tiendaService:TiendaService) { }

  ngOnInit(): void {
    this.tiendaService.getVentas().subscribe((ventas) => (this.ventas = ventas));
    this.tiendaService.getComponentes().subscribe((componentes) => (this.componentes = componentes));
    this.tiendaService.getVendedores().subscribe((vendedores) => (this.vendedores = vendedores));
  }

  componenteMasVendido(){
    let ventas = 0;
    let precio = 0;
    let productoEstrella = '';
    for(let i=0;i<this.componentes.length;i++){
      if(this.componentes[i].ventas > ventas || this.componentes[i].ventas === ventas && this.componentes[i].precio > precio){
          ventas = this.componentes[i].ventas;
          precio = this.componentes[i].precio;
          productoEstrella = this.componentes[i].nombre;
      }
    }
    return productoEstrella;
  }

  mejorVendedor(){
    let contador = 0;
    let vendedorEstrella = '';
    for(let i=0;i<this.vendedores.length;i++){
      if(this.vendedores[i].ventas >= contador){
        contador = this.vendedores[i].ventas;
        vendedorEstrella = this.vendedores[i].nombre;
      }
    }
    return vendedorEstrella;
  }

}
