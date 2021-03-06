import { Component, Inject, OnInit, Optional, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ToastrService } from "ngx-toastr";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { PageableDTO } from "src/app/shared/model/pageable-dto";
import { ResponseApi } from "src/app/shared/model/response-api";
import { Produto } from "../produto";
import { ProdutoService } from "../produto.service";
import { CreateProdutoComponent } from "../../produto/create-produto/create-produto.component";
import { DialogConfirmComponent } from "src/app/shared/components/dialog-confirm/dialog-confirm.component";

const ELEMENT_DATA: Produto[] = [];
@Component({
  selector: "app-list-produto",
  templateUrl: "./list-produto.component.html",
  styleUrls: ["./list-produto.component.scss"],
})
export class ListProdutoComponent implements OnInit {
  lista = new MatTableDataSource<Produto>();
  produto: Produto;
  pageableDTO: PageableDTO;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ["nome", "precoVenda", "precoCompra", "acao"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  pageSizeOptions: number[] = [5, 10, 20];
  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(
    private service: ProdutoService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrService,
    public dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.pageableDTO = new PageableDTO();
    this.pageableDTO.nome = '';
    this.pageableDTO.page = 0;
    this.pageableDTO.size = 7;
    this.pesquisar();
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

  openDialogNewProduto() {
    this.openDialogProduto(new Produto());
  }

  openDialogProduto(produto: Produto) {
    console.log("okkkk");
    this.produto = produto;
    const dialogRef = this.dialog.open(CreateProdutoComponent, {
      width: "700px",
      data: this.produto
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.produto = result;
      this.ngOnInit();
    });
  }

  messageConfirm(produto: Produto) {
    console.log("okkkk");
    this.produto = produto;
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: "400px",
      data: this.produto
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'ok'){
        this.delete(this.produto.id);
        this.ngOnInit();
      }
    });
  }

  delete(id: number) {
    return this.service.remove(id).subscribe(
      () => {
        console.log("saved");
        this.showSuccess();
        this.pesquisar();
      },
      (error) => {
        this.showError();
        console.log(JSON.stringify(error));
      }
    );
  }

  pageChange($event) {
    this.pageableDTO.size = $event.pageSize;
    this.pageableDTO.page = $event.pageIndex;
    this.pesquisar();
  }

  showSuccess() {
    this.toastr.success("Operação realizada com sucesso!", "Sucesso");
  }

  showError() {
    this.toastr.error("Ocorreu um error!", "Error");
  }
}
