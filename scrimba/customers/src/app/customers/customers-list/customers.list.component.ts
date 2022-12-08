import { Component } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers.list.component.html',
})
export class CustomersListComponent {
  filteredCustomers = [];
  customersOrderTotal!: number;
  currency = 'USD';
  constructor() {}
  ngOnInit(): void {}
}
