import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  @Input() product:Product;

  screenWidth:any;

  constructor(){}

  ngOnInit():void{
    
      
  }
}
