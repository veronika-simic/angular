import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers.list.component';
import { FilterTextBoxComponent } from './customers-list/filter-textbox.component';

@NgModule({
  declarations: [CustomersComponent, CustomersListComponent, FilterTextBoxComponent],
  imports: [CommonModule],
  exports: [CustomersComponent]
})
export class CustomersModule {}
