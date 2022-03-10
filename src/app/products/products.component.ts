import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, PRODUCTS } from './product.object';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  nike = new Product();
  adidas = new Product();
  puma = new Product();

  productList = PRODUCTS;
  

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Method Called');
  }

  onViewDetail(id: number){
    // alert(id);
    this.router.navigateByUrl('/products/edit/'+id);
  }



}

