import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendaRoutingModule } from './venda-routing.module';
import { CreateVendaComponent } from './create-venda/create-venda.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [CreateVendaComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    VendaRoutingModule
  ]
})
export class VendaModule { }
