import { ProductService } from '../service/product.service';
import { IProduct } from '../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  products: IProduct[];

  filteredProducts: IProduct[];
  private _listeFilter: string;

  get listeFilter(): string {
    return this._listeFilter;
  }
  set listeFilter(value: string) {
    this._listeFilter = value;
    this.filteredProducts = this.listeFilter ? this.performFilter(this.listeFilter) : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toogleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit() {

  }

  constructor(private _productService: ProductService) {
    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;
  }

}
