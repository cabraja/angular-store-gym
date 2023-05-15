import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interfaces/Product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent implements OnInit{

  product:Product;
  Math:any;
  subscription:Subscription;
  cart:Product[] = [];
  isProductAdded:boolean = false;

  constructor(private productService:ProductService, private route:ActivatedRoute, private cartService:CartService){
    this.Math = Math;

    this.subscription = this.cartService.getCart().subscribe(data => this.cart = data)
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: params => {
        this.productService.getProducts().subscribe({
          next: data => {
            let id = params.get('id');
            const result = data.filter( item => String(item.id) === id);
            this.product = result[0];
            
          },
          error: err => {
            console.log(err);
            
          }
        })
      },
      error: err => {
        console.log(err);
        
      }
    })
    
  }


  onClick(product:Product):void{
    this.cartService.addToCart(product);
    this.isProductAdded = true;

    setTimeout(() => {
      this.isProductAdded = false;
    }, 3000);
  }
}
