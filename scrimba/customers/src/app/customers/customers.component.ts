import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.compontent.html',
})
export class CustomersComponent implements OnInit {
  title: string = '';
  people: Array<{
        id: number;
        name: string;
        city: string;
        orderTotal: number;
        customerSince: Date;
    }> = [];

  constructor() {}
  ngOnInit(): void {
    this.title = 'Customers';
    this.people = [
      {
        id: 1,
        name: 'Jane Doe',
        city: 'New York',
        orderTotal: 20,
        customerSince: new Date(),
      },
      {
        id: 2,
        name: 'Jessica Dollar',
        city: 'New Amsterdam',
        orderTotal: 60,
        customerSince: new Date(),
      },
      {
        id: 3,
        name: 'Ginny Doe',
        city: 'New Mexico',
        orderTotal: 26,
        customerSince: new Date(),
      },
      {
        id: 4,
        name: 'Jane Darling',
        city: 'Mexico City',
        orderTotal: 40,
        customerSince: new Date(),
      },
    ];
  }
}
