import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { CreateProdutoComponent } from './create-produto/create-produto.component';
import { ListProdutoComponent } from './list-produto/list-produto.component';
import { MatComponentsModule } from '../mat-components/mat-components.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [CreateProdutoComponent, ListProdutoComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule,    
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatIconModule,
  ]
})
export class ProdutoModule { }
