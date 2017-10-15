import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { IProduct } from '../product';

@Injectable()
export class ProductService {

  private _productUrl = './api/products/products.json';

  constructor(private _httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(this._productUrl);
  }

  getProduct(id: number): Observable<IProduct> {
    return this.getProducts()
      .map((products: IProduct[]) => products.find(p => p.productId === id));
  }

}
