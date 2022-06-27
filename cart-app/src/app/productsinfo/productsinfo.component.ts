import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../models/products';
import { MyProductsService } from '../services/myproducts.service';

@Component({
  selector: 'app-productsinfo',
  templateUrl: './productsinfo.component.html',
  styleUrls: ['./productsinfo.component.css']
})
export class ProductsinfoComponent implements OnInit {

  public productDetails = new Products();


  constructor(private productService: MyProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductsDetais();
  }


  public addtoCart() {
    // window.location.href = window.location.href. 
  }

  private getProductsDetais() {
    const productsid = this.route.snapshot.paramMap.get('productsid');
    console.log("productsid",this.route.snapshot.paramMap);
    
  
    this.productService.getProductsById(productsid as string)
      .then(productDetails => {
        this.productDetails = productDetails as unknown as Products;
    });
}

}
