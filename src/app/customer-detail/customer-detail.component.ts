import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers, CUSTOMERS } from '../customers/customers.object';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  constructor(private router: ActivatedRoute, private routeWay: Router) { }

  customerList = CUSTOMERS;

  selectedCust = new Customers;
  newCust = new Customers;
  delCustomer = new Customers;


  ngOnInit(): void {
    this.router.params.subscribe(
      param => {
        for(let customer of this.customerList){
          if (param['id'] == customer.id){
            this.selectedCust = customer;
          }
        }
        this.newCust.age = this.selectedCust.age;
        this.newCust.years = this.selectedCust.years;
      }
    )
  }

  updateCustomer(){
    this.selectedCust.name = this.newCust.name;
    this.selectedCust.age = this.newCust.age;
    this.selectedCust.years = this.newCust.years;
    this.newCust = new Customers;
    this.routeWay.navigateByUrl('customers')
  }

  deleteCustomer(){
    
    this.router.params.subscribe(
      param =>{
        for(let customer of this.customerList){
          if(param['id'] == customer.id){
            this.delCustomer = customer;
            
          }
        }
        
      }
    )

    CUSTOMERS.forEach((element,index)=>{
      if(element.id == this.delCustomer.id){
        CUSTOMERS.splice(index,1);
      };
   });

   this.routeWay.navigateByUrl('customers');
  }
}
