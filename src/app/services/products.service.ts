import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpRequest: HttpClient) { }

  getProducts(): Observable <any>{
    return this.httpRequest.get('https://622b307b14ccb950d2321d22.mockapi.io/products');
}

}
