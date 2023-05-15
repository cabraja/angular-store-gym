import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/Product';
import { CartItem } from '../interfaces/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems:CartItem[] = [];
  private cartCount:number = 0;
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  constructor() { }

  addToCart(product:Product):void{
    let arr = this.cartItems;
    this.cartCount++;
    arr.push({...product, cartId:this.cartCount})
    this.cartSubject.next(arr)
  }

  getCart():Observable<CartItem[]>{
    return this.cartSubject.asObservable();
  }

  deleteFromCart(cartItem:CartItem):Observable<CartItem[]>{
    const arr = this.cartItems.filter(item => item.cartId !== cartItem.cartId);
    this.cartItems = arr;
    this.cartCount--;
    this.cartSubject.next(arr);
    return this.cartSubject.asObservable();
  }
}
