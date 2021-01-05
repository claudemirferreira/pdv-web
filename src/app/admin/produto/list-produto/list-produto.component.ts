import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ResponseApi } from 'src/app/sherad/model/response-api';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.scss']
})
export class ListProdutoComponent implements OnInit {

  lista = new MatTableDataSource<Produto>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: ProdutoService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.pesquisar()
  }

  pesquisar() {
    this.ngxLoader.start();
    this.service.listarTodos().subscribe(
      (responseApi: ResponseApi) => {
        console.log(responseApi["content"]);
        this.lista = new MatTableDataSource<Produto>(responseApi["content"]);
        this.lista.sort = this.sort;
        console.log(JSON.stringify(this.lista));

        this.ngxLoader.stop();
      },
      (err) => {
        this.showError();
      }
    );
  }

  showSuccess() {
    this.toastr.success('Operação realizada com sucesso!', 'Sucesso');
  }

  showError() {
    this.toastr.error('Ocorreu um error!', 'Error');
  }

}
