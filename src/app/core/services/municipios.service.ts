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
