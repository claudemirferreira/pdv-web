import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterTabs } from './router-tab/router-tabs.directive';
import { RouterTab } from './router-tab/router-tab.directive';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';

@NgModule({
  imports: [CommonModule, RouterModule, FlexLayoutModule],
  declarations: [PageNotFoundComponent, RouterTabs, RouterTab, DialogConfirmComponent],
  exports: [
    CommonModule,
    FlexLayoutModule,
    PageNotFoundComponent,
    RouterTabs,
    RouterTab
  ]
})
export class SharedModule {}
