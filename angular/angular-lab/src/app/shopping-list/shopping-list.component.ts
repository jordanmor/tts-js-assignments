import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../models/shopping-item';
import { SHOPPING_ITEMS } from '../shopping-items';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingItems = SHOPPING_ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
