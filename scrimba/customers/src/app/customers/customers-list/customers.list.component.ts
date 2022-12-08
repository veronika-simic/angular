import { Component } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers.list.component.html',
})
export class CustomersListComponent {
  filteredCustomers: Customer[] = [];
  customersOrderTotal!: number;
  currency = 'USD';
  constructor() {}
  ngOnInit(): void {}
}
