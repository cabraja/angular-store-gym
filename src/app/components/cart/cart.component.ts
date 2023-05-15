import { Component , OnInit} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/Product';
import { CartItem } from 'src/app/interfaces/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems:CartItem[] = [];
  subscription:Subscription;

  constructor(private cartService:CartService){
    this.subscription = this.cartService.getCart().subscribe(data => this.cartItems = data)
  }

  ngOnInit():void{
    
  }

  deleteFromCart(cartItem:CartItem):void{
    this.cartService.deleteFromCart(cartItem).subscribe({
      next: data => this.cartItems = data,
      error: err => console.log(err)
      
    })
    
  }

}
