import { NgModule } from '@angular/core';

import { ProdutoRoutingModule } from './produto-routing.module';
import { CreateProdutoComponent } from './create-produto/create-produto.component';
import { ListProdutoComponent } from './list-produto/list-produto.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [CreateProdutoComponent, ListProdutoComponent],
  imports: [
    ProdutoRoutingModule, 
    MaterialModule,
    
  ]
})
export class ProdutoModule { }
