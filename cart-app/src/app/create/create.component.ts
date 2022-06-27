import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../models/products';
import { MyProductsService } from '../services/myproducts.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public createProducts: Products = {
    _id: '',
    title: '',
    description: '',
    price: 0,
    imagePath: '',     
    isSelected: '',     
  };

  constructor(private productService: MyProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  public createnewProduct(myNewProduct: Products): void{
    this.productService.createProducts(myNewProduct)
    .then(myNewProduct => {
      console.log("myNewProduct", myNewProduct);
      
      if (myNewProduct) {
        this.router.navigate([`/products`]);
      }
    });
  }

}
