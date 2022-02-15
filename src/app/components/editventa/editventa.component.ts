import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TiendaService } from 'src/app/service/tienda.service';
import { Vendedor } from 'src/app/interfaces/vendedor';
import { Sucursal } from 'src/app/interfaces/sucursal';
import { Componente } from 'src/app/interfaces/componente';
import { Venta } from 'src/app/interfaces/venta';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { VentasComponent } from '../ventas/ventas.component';

@Component({
  selector: 'app-editventa',
  templateUrl: './editventa.component.html',
  styleUrls: ['./editventa.component.css']
})
export class EditventaComponent implements OnInit {

  form: FormGroup;
  vendedores: Vendedor[] = [];
  sucursales: Sucursal[] = [];
  componentes: Componente[] = [];
  ventas: Venta[] = [];
  id:string = '';
  selectedVendedor: string = '';
  selectedSucursal: string = '';
  selectedComponentes: string = '';

  constructor
    (
      private formBuilder: FormBuilder,
      private tiendaService: TiendaService,
      private router: Router,
      private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group
      (
        {
          fecha: '',
          vendedor: '',
          sucursal: '',
          componentes: ''
        }
      )
  }

  ngOnInit(): void {
    this.tiendaService.getVendedores().subscribe((vendedores) => (this.vendedores = vendedores));
    this.tiendaService.getSucursales().subscribe((sucursales) => (this.sucursales = sucursales));
    this.tiendaService.getComponentes().subscribe((componentes) => (this.componentes = componentes));
    this.tiendaService.getVentas().subscribe((ventas) => (this.ventas = ventas));
    this.id = this.route.snapshot.params['id'];
  }

  onEdit() {
    let formData: any = {
      id: this.id,
      vendedor: this.vendedores[parseInt(this.selectedVendedor) - 1],
      sucursal: this.sucursales[parseInt(this.selectedSucursal) - 1],
      componentes: this.selectedComponentes,
      fecha: this.form.get("fecha")?.value,
    };
    this.tiendaService.deleteVenta(parseInt(this.id));
    this.tiendaService.saveVenta(formData);
    this.router.navigate(["/"]).then(() => { window.location.reload() });
  }

  selectedVendedorHandler(event: any) {
    this.selectedVendedor = event.target.value;
  }

  selectedSucursalHandler(event: any) {
    this.selectedSucursal += event.target.value;
  }

  componentesHandler(event: any) {
    if (this.selectedComponentes.includes(event.target.value)) {
      this.selectedComponentes = this.selectedComponentes.replace(event.target.value, '');
    }
    else {
      console.log("NOT CHECKED, adding...")
      this.selectedComponentes += event.target.value;
    }
  }

}