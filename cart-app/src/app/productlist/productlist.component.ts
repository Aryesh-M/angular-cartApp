import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { MyProductsService } from '../services/myproducts.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  public myProducts: Products[] = [];

  constructor(private productService: MyProductsService) { }

  ngOnInit(): void {
    this.getMyProducts();
  }

  private getMyProducts() {
    window.scrollTo(0,0);
    this.productService
      .getProducts()
      .then(products => {      
        this.myProducts = products as Products[]
      });
  }
}