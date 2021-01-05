import { Component, OnInit } from '@angular/core';
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
  ) {}

  ngOnInit(): void {

    this.produto = new Produto();
    this.produto.nome = 'teste';
    this.produto.precoCompra = 20;
    this.produto.precoVenda = 40;
    console.log(JSON.stringify(this.produto));
    this.salvar();

  }

  salvar(){
    //this.ngxLoader.start();
    this.service.save(this.produto).subscribe((responseApi: ResponseApi) => {
      console.log(responseApi['content']);
      //this.showSuccess();
      //this.ngxLoader.stop();
    }, err => {
      console.log('################error');
    });
  }

}
