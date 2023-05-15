import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { CartItem } from 'src/app/interfaces/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input() item:CartItem;
  @Output() deleteFromCart = new EventEmitter();

  constructor(){}

  onDelete(cartItem:CartItem):void{
    this.deleteFromCart.emit(cartItem);
    
  }
}
