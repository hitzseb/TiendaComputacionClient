import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/service/tienda.service';
import { Venta } from 'src/app/interfaces/venta';
import { Componente } from 'src/app/interfaces/componente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  ventas: Venta[] = [];
  componentes: Componente[] = [];

  constructor(
    private tiendaService: TiendaService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.tiendaService.getVentas().subscribe((ventas) => (this.ventas = ventas));
    this.tiendaService.getComponentes().subscribe((componentes) => (this.componentes = componentes));
  }

  onDeleteVenta(id:any){
    this.tiendaService.deleteVenta(parseInt(id)).subscribe();
    this.router.navigate(["/"]).then(() => {window.location.reload()});
  }

  onEditVenta(id:any){
    this.router.navigate(["/edit/",id]);
  }

}
