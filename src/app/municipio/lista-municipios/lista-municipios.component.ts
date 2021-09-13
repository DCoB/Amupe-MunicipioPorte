import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { IMunicipio } from '../../core/services/municipios.service';
import { MunicipiosService } from './../../core/services/municipios.service';

@Component({
  selector: 'app-lista-municipios',
  templateUrl: './lista-municipios.component.html',
  styleUrls: ['./lista-municipios.component.scss']
})
export class ListaMunicipiosComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  searchValue!: string;
  apenasPortesAlterados: boolean = false;

  dataSource!: MatTableDataSource<IMunicipio>;
  displayedColumns: string[] = ['cidade', 'rd', 'porte2010', 'porte2021'];

  constructor(private readonly _municiosService: MunicipiosService, private readonly _router: Router) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this._municiosService.getAllMunicipios());
  }

  ngAfterViewInit(): void {
    this.configureDataSource(this._municiosService.getAllMunicipios())
  }

  configureDataSource(data: any) {
    this.dataSource = new MatTableDataSource(data);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  clearSearch() {
    this.searchValue = '';
    this.applyFilter(null);
  }

  applyFilter(event: any) {
    let filterValue;
    if (!event) {
      filterValue = '';
    }
    else {
      filterValue = (event.target as HTMLInputElement).value;
    }

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  apenasPortesAlteradosChange() {
    if (this.apenasPortesAlterados) {
      this.configureDataSource(this._municiosService.getAllApenasPortesAlterados());
    }
    else {
      this.configureDataSource(this._municiosService.getAllMunicipios());
    }
  }

  rowClick(row: any) {
    this._router.navigate(['overview', row.id]);
  }
}
