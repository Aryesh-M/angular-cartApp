import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../models/products';
import { MyProductsService } from '../services/myproducts.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public update_products: Products = {
    _id: '',
    title: '',
    description: '',
    price: 0,
    imagePath: '',     
    isSelected: '',     
  };

  constructor(private productService: MyProductsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    var productsId = this.route.snapshot.paramMap.get('productsid');

    this.productService.getProductsById(productsId as string)
      .then(products => {
        this.update_products = products as Products;
      });
  }

  public updateProducts(updateproducts: Products): void{

    const productsid = this.route.snapshot.paramMap.get('productsid');
    this.productService.editProducts(productsid as string, updateproducts)
    .then(updateproducts => {
      if (updateproducts) {
        this.router.navigate([`/products`]);
      }
    });
  }
}