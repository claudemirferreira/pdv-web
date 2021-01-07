import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { PageableDTO } from 'src/app/shared/model/pageable-dto';
import { ResponseApi } from 'src/app/shared/model/response-api';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

const ELEMENT_DATA: Produto[] = [];

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.scss']
})
export class ListProdutoComponent implements OnInit {

  lista = new MatTableDataSource<Produto>();
  pageableDTO: PageableDTO;
  //lista: Produto[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['nome', 'precoVenda', 'precoCompra', 'acao'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  length = 0;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions: number[] = [5, 10, 20];
  // MatPaginator Output
  pageEvent: PageEvent;
  size: 10;
  totalElements: number;

  constructor(
    private service: ProdutoService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.pageableDTO = new PageableDTO();
    this.pageableDTO.nome = 'o';
    this.pageableDTO.page = 0
    this.pageableDTO.size = 5
    this.pesquisar()
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(",")
        .map((str) => +str);
    }
  }

  pesquisar() {
    this.ngxLoader.start();
    this.service.pesquisar(this.pageableDTO).subscribe(
      (responseApi: ResponseApi) => {
        console.log(responseApi["content"]);
        this.lista = new MatTableDataSource<Produto>(responseApi["content"]);
        this.lista.sort = this.sort;
        
        this.pageableDTO.totalElements = responseApi["totalElements"];
        this.pageableDTO.pageSize = responseApi["totalPages"];
        this.pageableDTO.pageIndex = responseApi["number"];
        this.pageableDTO.pageSize = responseApi["size"];

        console.log(this.lista);

        this.ngxLoader.stop();
      },
      (err) => {
        this.showError();
      }
    );
  }

  onLoggedout(){
    console.log('okkkk');
  }
  
  pageChange($event) {
    this.pageableDTO.size = $event.pageSize;
    this.pageableDTO.page = $event.pageIndex;
    this.pesquisar();
  }

  showSuccess() {
    this.toastr.success('Operação realizada com sucesso!', 'Sucesso');
  }

  showError() {
    this.toastr.error('Ocorreu um error!', 'Error');
  }

}
