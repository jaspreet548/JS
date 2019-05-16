import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient [];
  constructor() { }

  ngOnInit() {
  }

  addedIngredientData(ingredientData: Ingredient) {
    this.ingredients.push(ingredientData);
  }

}
