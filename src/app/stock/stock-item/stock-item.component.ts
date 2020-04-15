import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  // public name: string;
  // public code: string;
  // public price: number;
  // public previousPrice: number;
  // public positiveChange: boolean;
  // public favorite: boolean;

  public stock: Stock;

  constructor() { }

  ngOnInit() {
    // this.name = 'Test Stock Company';
    // this.code = 'TSC';
    // this.price = 85;
    // this.previousPrice = 80;
    // this.positiveChange = this.price >= this.previousPrice;
    // this.favorite = false;
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
  }

  toggleFavorite() {    
    console.log('We are toggling the favorite state for this stock');    
    this.stock.favorite = !this.stock.favorite;  
  }

}
