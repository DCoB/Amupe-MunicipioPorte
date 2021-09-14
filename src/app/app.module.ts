import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';

//Charts
import { ChartModule } from 'primeng/chart';

//App
import { CoreModuleModule } from './core/core-module.module';
import { ListaMunicipiosComponent } from './municipio/lista-municipios/lista-municipios.component';
import { MunicipioOverviewComponent } from './municipio/municipio-overview/municipio-overview.component';
import { SobreComponent } from './shared/sobre/sobre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableExporterModule } from 'mat-table-exporter';

const materialModules = [
  MatTableModule,
  MatInputModule,
  MatIconModule,
  MatSlideToggleModule,
  MatPaginatorModule,
  MatSortModule,
  MatSelectModule,
  MatTableExporterModule
]

@NgModule({
  declarations: [
    AppComponent,
    ListaMunicipiosComponent,
    MunicipioOverviewComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModuleModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartModule,
    materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
