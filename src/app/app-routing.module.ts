import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditventaComponent } from './components/editventa/editventa.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NewventaComponent } from './components/newventa/newventa.component';
import { ReportesComponent } from './components/reportes/reportes.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'new', component: NewventaComponent },
  { path: 'edit/:id', component: EditventaComponent },
  { path: 'reportes', component: ReportesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
