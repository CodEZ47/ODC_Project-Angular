import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, PRODUCTS } from '../products/product.object';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private router: ActivatedRoute, private routeWay: Router) { }

  products = PRODUCTS;
  selectedProduct = new Product();
  newProduct = new Product();
  ngOnInit(): void {
    this.router.params.subscribe(
      param =>{
        for(let product of this.products){
          if(param['id'] == product.id){
            this.selectedProduct = product;
            
          }
        }
        this.newProduct.price = this.selectedProduct.price;
        
      }
    )
  }

  updateProduct(){

    this.selectedProduct.name = this.newProduct.name;
    this.selectedProduct.price = this.newProduct.price;
    this.newProduct = new Product();
    this.routeWay.navigateByUrl('products');
    
  }

}
