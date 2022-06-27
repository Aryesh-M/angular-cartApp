import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyProductsService } from '../services/myproducts.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private productService: MyProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.deleteMyProduct();
  }

  public deleteMyProduct() {
    const productId = this.route.snapshot.paramMap.get('deleteid');
    this.productService.deleteProducts(productId as string)
      .then(() => this.router.navigate([`/products`])
    );
  }
}