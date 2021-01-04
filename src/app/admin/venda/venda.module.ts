import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendaRoutingModule } from './venda-routing.module';
import { CreateVendaComponent } from './create-venda/create-venda.component';


@NgModule({
  declarations: [CreateVendaComponent],
  imports: [
    CommonModule,
    VendaRoutingModule
  ]
})
export class VendaModule { }
