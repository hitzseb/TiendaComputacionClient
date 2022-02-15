import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/interfaces/sucursal';
import { TiendaService } from 'src/app/service/tienda.service';

@Component({
  selector: 'app-tablaxsucursal',
  templateUrl: './tablaxsucursal.component.html',
  styleUrls: ['./tablaxsucursal.component.css']
})
export class TablaxsucursalComponent implements OnInit {

  sucursales: Sucursal[] = [];

  constructor(private tiendaService:TiendaService) { }

  ngOnInit(): void {
    this.tiendaService.getSucursales().subscribe((sucursales) => (this.sucursales = sucursales));
  }

}
