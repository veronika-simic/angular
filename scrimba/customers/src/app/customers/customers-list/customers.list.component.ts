import { Component, OnInit, Input} from '@angular/core';
import { Customer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers.list.component.html',
})
export class CustomersListComponent implements OnInit {
  private _customers: Customer[] = [];
  @Input() get customers(): Customer[] {
    return this._customers
  }

  set customers(value: Customer[]){
    if (value){
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  filteredCustomers: Customer[] = [];
  customersOrderTotal = 0;
  currency = 'USD';
  constructor() {}
  ngOnInit(): void {}

  calculateOrders(){
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((customer: Customer) => {
    /*  this.customersOrderTotal += customer.orderTotal? */
    });
  }

  sort(prop: string){
    /* handles sorting, service */
  }
}
