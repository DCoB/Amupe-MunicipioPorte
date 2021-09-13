import { IMunicipio, IPrevisao2040, MunicipiosService } from './../../core/services/municipios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-municipio-overview',
  templateUrl: './municipio-overview.component.html',
  styleUrls: ['./municipio-overview.component.scss']
})
export class MunicipioOverviewComponent implements OnInit {

  dataSet: any;
  chartOptions: any;

  municipio!: IMunicipio;
  previsoesPopulacionais: any;

  politicasPublicasList : any[] = [];

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

    this.politicasPublicasList = ['Serviço Social'];


    let labelsAnos = Object.keys(this.previsoesPopulacionais).splice(0, 38);

    let datas: any[] = [];
    labelsAnos.forEach((label) => {
      datas.push(this.previsoesPopulacionais[label]);
    })

    this.configureChart(labelsAnos, datas);

    console.log('Labels Anos', labelsAnos);
    console.log('Values Anos', datas);
    console.log('keys', Object.keys(this.previsoesPopulacionais));
  }

  configureChart(labels: any[], datas: any[]) {
    this.dataSet = {
      labels: labels,
      datasets: [
        {
          label: this.municipio.cidade,
          data: datas,
          fill: true,
          borderColor: '#FFA726',
          backgroundColor: 'rgba(255,167,38,0.2)',
          tension: .4
        }
      ]
    };

    this.chartOptions = {
      title: {
        display: true,
        text: 'My Title',
        fontSize: 16
      },
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
  }

  formatNumber(number: number) {
    return number.toLocaleString();
  }

}
