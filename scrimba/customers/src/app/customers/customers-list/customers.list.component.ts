import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers.list.component.html',
})
export class CustomersListComponent implements OnInit {
  private _customers: Customer[] = [];
  @Input() get customers(): Customer[] {
    return this._customers;
  }

  set customers(value: Customer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  filteredCustomers: Customer[] = [];
  customersOrderTotal = 0;
  currency = 'USD';
  constructor() {}
  ngOnInit(): void {}

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((customer: Customer) => {
      /*   this.customersOrderTotal += customer.orderTotal */
    });
  }

  filter(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((customer: Customer) => {
        return (
          customer.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          customer.city.toLowerCase().indexOf(data.toLowerCase()) > -1
        );
      });
      this.calculateOrders();
    } else {
      this.filteredCustomers = this.customers;
    }
  }

  sort(prop: string) {
    /* handles sorting, service */
  }
}
