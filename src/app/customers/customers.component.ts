import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from './customers.object';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }
  customerList = CUSTOMERS;

  ngOnInit(): void {
  }

}


