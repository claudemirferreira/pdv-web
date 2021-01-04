import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { CreateProdutoComponent } from './create-produto/create-produto.component';
import { ListProdutoComponent } from './list-produto/list-produto.component';


@NgModule({
  declarations: [CreateProdutoComponent, ListProdutoComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
