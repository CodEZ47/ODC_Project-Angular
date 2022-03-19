import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CUSTOMERS, Customers } from '../customers/customers.object';
import { Product, PRODUCTS } from '../products/product.object';
import { Page, PAGES } from './add.object';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router: ActivatedRoute, private routeWay: Router) { }

  pages = PAGES;
  selectedPage = new Page;

  newP = new Product();
  newC = new Customers();

  ngOnInit(): void {
    this.router.params.subscribe(
      param => {
        for(let page of this.pages){
            if(param['currentPage'] == page.currentPage){
                this.selectedPage = page;
            }
        }
        // alert(this.selectedPage.currentPage)
      }
    )
  }

  addProduct(){

    PRODUCTS.push(this.newP);
    this.newP = new Product();
    this.routeWay.navigateByUrl('products');

  }

  addCustomer(){

    CUSTOMERS.push(this.newC);
    this.newC = new Customers();
    this.routeWay.navigateByUrl('customer');
  }
}
