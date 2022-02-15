import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { NewventaComponent } from './components/newventa/newventa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditventaComponent } from './components/editventa/editventa.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { TablareportesComponent } from './components/tablareportes/tablareportes.component';
import { TablaxsucursalComponent } from './components/tablaxsucursal/tablaxsucursal.component';
import { BotonesComponent } from './components/botones/botones.component';

@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    NewventaComponent,
    MainpageComponent,
    NavbarComponent,
    EditventaComponent,
    ReportesComponent,
    TablareportesComponent,
    TablaxsucursalComponent,
    BotonesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
