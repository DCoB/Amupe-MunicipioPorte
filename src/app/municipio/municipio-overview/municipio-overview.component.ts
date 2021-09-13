import { IMunicipio, IPrevisao2040, MunicipiosService } from './../../core/services/municipios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-municipio-overview',
  templateUrl: './municipio-overview.component.html',
  styleUrls: ['./municipio-overview.component.scss']
})
export class MunicipioOverviewComponent implements OnInit {

  municipio!: IMunicipio;

  previsoesPopulacionais !: IPrevisao2040;

  constructor(
    private readonly _municioService: MunicipiosService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idMunicipio = parseInt(this.route.snapshot.params['id']);

    this.municipio = this._municioService.getById(idMunicipio);

    if (idMunicipio >= 5) {
      this.previsoesPopulacionais = this._municioService.getPrevisoesById(idMunicipio + 6);
    }
    else {
      this.previsoesPopulacionais = this._municioService.getPrevisoesById(idMunicipio + 1);
    }
  }

}
