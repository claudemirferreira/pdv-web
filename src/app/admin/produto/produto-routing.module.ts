import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProdutoComponent } from './create-produto/create-produto.component';
import { ListProdutoComponent } from './list-produto/list-produto.component';

const routes: Routes = [
  {
    path: 'create-produto',
    component: CreateProdutoComponent
  },
  {
    path: 'list-produto',
    component: ListProdutoComponent
  },
  {
    path: '',
    component: ListProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
