import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModuleModule } from './core/core-module.module';
import { ListaMunicipiosComponent } from './municipio/lista-municipios/lista-municipios.component';
import { MunicipioOverviewComponent } from './municipio/municipio-overview/municipio-overview.component';
import { SobreComponent } from './shared/sobre/sobre.component';

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
    CoreModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
