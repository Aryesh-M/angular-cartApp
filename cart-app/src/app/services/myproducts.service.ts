import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import { Products } from '../models/products';
 

@Injectable({
  providedIn: 'root'
})
export class MyProductsService {

  private productsUrl = 'http://localhost:3000/api/products';   
  constructor(private http:HttpClient){}

  getProducts() : Promise<void | Products[]>{

    return this.http.get(this.productsUrl)
     .toPromise()
     .then(response => response as Products[])
     .catch(this.errorHandlerofProducts);
   } 

   getProductsById(myProductsId: string) {
    return this.http.get(`${this.productsUrl}/${myProductsId}`)
    .toPromise()
    .then(response => response as Products)
    .catch(this.errorHandlerofProducts);
  }


  createProducts(createmyNewProducts: Products): Promise<void | Products> {
    console.log("createmyNewProducts", createmyNewProducts)
    return this.http.post(this.productsUrl, createmyNewProducts)
      .toPromise()
      .then(response => response as Products)
      .catch(this.errorHandlerofProducts);
  }

  deleteProducts(myproductsId : string) {
    return this.http.delete(`${this.productsUrl}/${myproductsId}`)
    .toPromise()
    .then(response => response as Products)
    .catch(this.errorHandlerofProducts);
  }

  editProducts(myproductsId: string,editProducts: Products): Promise<void | Products> {
    
    return this.http.put(`${this.productsUrl}/${myproductsId}`, editProducts)
    .toPromise()
    .then(response => response as Products)
    .catch(this.errorHandlerofProducts);
  } 

   private errorHandlerofProducts(error: any){
    console.log(error);
  }
}