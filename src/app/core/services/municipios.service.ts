import { Injectable } from '@angular/core';

import { municipiosDataBase } from '../../core/models/municipiosModel'
import { previsaoDataBase } from '../models/previsaoModel';

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {

  constructor() { }

  getAllMunicipios(): IMunicipio[] {
    return municipiosDataBase;
  }

  getAllApenasPortesAlterados(): IMunicipio[] {
    return municipiosDataBase.filter((municipio) => municipio.porte2010 !== municipio.porte2021);
  }

  getById(id: number): IMunicipio {
    return municipiosDataBase.filter((municipio) => municipio.id == id)[0];
  }

  getPrevisoesById(idMunicipio: number): IPrevisao2040 {
    return previsaoDataBase.filter((previsoes) => previsoes.id == idMunicipio)[0];
  }

  calculaProximoAnoAlteraPorte() {
    return 0;
  }

  classificaPorte(populacao: number) {
    if (populacao <= 20000) {
      return 'Pequeno Porte I'
    }
    else if (populacao <= 50000) {
      return 'Pequeno Porte II'
    }
    else if (populacao <= 100000) {
      return 'Médio Porte'
    }
    else if (populacao <= 900000) {
      return 'Grande Porte'
    }
    else {
      return 'Metrópole'
    }
  }

  calcularArrecadacaoAnual(regrasApos2019: boolean, porte: string, equipamentos: IEquipamentosServicoSocial) {
    let arrecadacaoMensalCRAS = this.getValorPorEquipamento('CRAS', porte, regrasApos2019)* equipamentos.cras;
    let arrecadacaoMensalCREAS = this.getValorPorEquipamento('CREAS', porte, regrasApos2019)* equipamentos.creas;
    let arrecadacaoMensalSERVACOLHIMENTO = this.getValorPorEquipamento('SERV ACOLHIMENTO', porte, regrasApos2019)* equipamentos.servAcolhimento;
    let arrecadacaoMensalCENTROPOP = this.getValorPorEquipamento('CENTRO POP', porte, regrasApos2019)* equipamentos.centroPOP;

    let arrecadacaoMensalTotal = arrecadacaoMensalCRAS + arrecadacaoMensalCREAS + arrecadacaoMensalSERVACOLHIMENTO + arrecadacaoMensalCENTROPOP;

    return arrecadacaoMensalTotal* 12
  }

  getValorPorEquipamento(equipamento: string, porte: string, regrasApos2019: boolean): number {
    switch(porte) {
      case 'Pequeno Porte I': {
        if (equipamento == 'CRAS') {
          if (regrasApos2019)
            return 2500
          else return 5000
        }
        else if(equipamento == 'CREAS') {
          if (regrasApos2019)
            return 0
          else return 6500
        }
        else if(equipamento == 'SERV ACOLHIMENTO') {
          if (regrasApos2019)
            return 0
          else return 0
        }
        else if(equipamento == 'CENTRO POP') {
          if (regrasApos2019)
            return 0
          else return 0
        }
        break;
      }
      case 'Pequeno Porte II': {
        if (equipamento == 'CRAS') {
          if (regrasApos2019)
            return 3500
          else return 6500
        }
        else if(equipamento == 'CREAS') {
          if (regrasApos2019)
            return 2600
          else return 8000
        }
        else if(equipamento == 'SERV ACOLHIMENTO') {
          if (regrasApos2019)
            return 2000
          else return 5000
        }
        else if(equipamento == 'CENTRO POP') {
          if (regrasApos2019)
            return 0
          else return 0
        }
        break;
      }
      case 'Médio Porte': {
        if (equipamento == 'CRAS') {
          if (regrasApos2019)
            return 3600
          else return 9000
        }
        else if(equipamento == 'CREAS') {
          if (regrasApos2019)
            return 4000
          else return 8000
        }
        else if(equipamento == 'SERV ACOLHIMENTO') {
          if (regrasApos2019)
            return 4000
          else return 10000
        }
        else if(equipamento == 'CENTRO POP') {
          if (regrasApos2019)
            return 0
          else return 0
        }
        break;
      }
      case 'Grande Porte': {
        if (equipamento == 'CRAS') {
          if (regrasApos2019)
            return 4900
          else return 12000
        }
        else if(equipamento == 'CREAS') {
          if (regrasApos2019)
            return 4100
          else return 10300
        }
        else if(equipamento == 'SERV ACOLHIMENTO') {
          if (regrasApos2019)
            return 8100
          else return 10000
        }
        else if(equipamento == 'CENTRO POP') {
          if (regrasApos2019)
            return 5200
          else return 0
        }
        break;
      }
      case 'Metrópole': {
        if (equipamento == 'CRAS') {
          if (regrasApos2019)
            return 4414
          else return 9000
        }
        else if(equipamento == 'CREAS') {
          if (regrasApos2019)
            return 3586
          else return 13000
        }
        else if(equipamento == 'SERV ACOLHIMENTO') {
          if (regrasApos2019)
            return 10000
          else return 10000
        }
        else if(equipamento == 'CENTRO POP') {
          if (regrasApos2019)
            return 18750
          else return 23000
        }
        break;
      }
    }
    return -1;
  }
}


export interface IMunicipio {
  id: number;
  cidade: string;
  rd: string;
  porte2010: string;
  porte2021: string;
  equipamentos: IEquipamentosServicoSocial;
}

interface IEquipamentosServicoSocial {
  cras: number;
  creas: number;
  centroPOP: number;
  servAcolhimento: number;
}

export interface IPrevisao2040 {
  id: number;
  Cidade: string;
  2001: number;
  2002: number;
  2003: number;
  2004: number;
  2005: number;
  2006: number;
  2008: number;
  2009: number;
  2011: number;
  2012: number;
  2013: number;
  2014: number;
  2015: number;
  2016: number;
  2017: number;
  2018: number;
  2019: number;
  2020: number;
  2021: number;
  2022: number;
  2023: number;
  2024: number;
  2025: number;
  2026: number;
  2027: number;
  2028: number;
  2029: number;
  2030: number;
  2031: number;
  2032: number;
  2033: number;
  2034: number;
  2035: number;
  2036: number;
  2037: number;
  2038: number;
  2039: number;
  2040: number;
}
