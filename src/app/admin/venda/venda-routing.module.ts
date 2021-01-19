import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateVendaComponent } from './create-venda/create-venda.component';

const routes: Routes = [

  {
    path: '',
    component: CreateVendaComponent
  },
  {
    path: 'create',
    component: CreateVendaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendaRoutingModule { }
