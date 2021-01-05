import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ResponseApi } from 'src/app/sherad/model/response-api';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.scss']
})
export class CreateProdutoComponent implements OnInit {

  produto: Produto;

  constructor(
    private service: ProdutoService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrService
  ) {
    
    this.showSuccess();
  }

  ngOnInit(): void {

    this.produto = new Produto();
    this.produto.nome = 'teste';
    this.produto.precoCompra = 20;
    this.produto.precoVenda = 40;
    console.log(JSON.stringify(this.produto));
    this.salvar();
    this.showSuccess();

  }

  salvar(){
    this.ngxLoader.start();
    this.service.save(this.produto).subscribe((responseApi: ResponseApi) => {
      console.log(responseApi['content']);
      this.showSuccess();
      this.ngxLoader.stop();
    }, err => {
      console.log('################error');
      this.showError();
    });
  }

  showSuccess() {
    this.toastr.success('Operação realizada com sucesso!', 'Sucesso');
  }

  showError() {
    this.toastr.error('Ocorreu um error!', 'Error');
  }

}
