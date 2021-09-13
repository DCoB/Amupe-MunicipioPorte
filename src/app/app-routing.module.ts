import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SobreComponent } from './shared/sobre/sobre.component';
import { MunicipioOverviewComponent } from './municipio/municipio-overview/municipio-overview.component';
import { ListaMunicipiosComponent } from './municipio/lista-municipios/lista-municipios.component';

const routes: Routes = [
  { path: '', component: ListaMunicipiosComponent },
  { path: 'overview/:id', component: MunicipioOverviewComponent},
  { path: 'sobre', component: SobreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
