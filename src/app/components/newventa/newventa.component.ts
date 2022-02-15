import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { TiendaService } from 'src/app/service/tienda.service';
import { Vendedor } from 'src/app/interfaces/vendedor';
import { Sucursal } from 'src/app/interfaces/sucursal';
import { Componente } from 'src/app/interfaces/componente';
import { Router } from '@angular/router';
import { Venta } from 'src/app/interfaces/venta';

@Component({
  selector: 'app-newventa',
  templateUrl: './newventa.component.html',
  styleUrls: ['./newventa.component.css']
})

export class NewventaComponent implements OnInit {

  form: FormGroup;
  vendedores: Vendedor[] = [];
  sucursales: Sucursal[] = [];
  componentes: Componente[] = [];
  selectedVendedor: string = '';
  selectedSucursal: string = '';
  selectedComponentes: string = '';

  constructor
    (
      private formBuilder: FormBuilder,
      private tiendaService: TiendaService,
      private router:Router
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
  }

  submitForm() {
    let formData: Venta = {
      fecha: this.form.get("fecha")?.value,
      vendedor: this.vendedores[parseInt(this.selectedVendedor) - 1],
      sucursal: this.sucursales[parseInt(this.selectedSucursal) - 1],
      componentes:this.selectedComponentes
    };
    this.tiendaService.saveVenta(formData);
    this.router.navigate(["/"]).then(() => {window.location.reload()});
  }

  selectedVendedorHandler(event: any) {
    this.selectedVendedor = event.target.value;
  }

  selectedSucursalHandler(event: any) {
    this.selectedSucursal += event.target.value;
  }

  componentesHandler(event:any){
    if(this.selectedComponentes.includes(event.target.value)){
      this.selectedComponentes = this.selectedComponentes.replace(event.target.value,'');
    }
    else{
      this.selectedComponentes += event.target.value;
    }
  }

}