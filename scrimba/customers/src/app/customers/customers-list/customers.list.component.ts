import { Component } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers.list.component.html',
})
export class CustomersListComponent {
  filteredCustomers: Customer[] = [];
  customersOrderTotal = 0;
  currency = 'USD';
  constructor() {}
  ngOnInit(): void {}

  calculateOrders(){
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((customer: Customer) => {
     /*  this.customersOrderTotal += customer.orderTotal; */
    })
  }
}
