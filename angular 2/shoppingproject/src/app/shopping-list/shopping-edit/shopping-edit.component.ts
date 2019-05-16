import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ShoppingListComponent } from '../shopping-list.component';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputControl') inputControl;
  @ViewChild('amountControl') amountControl;
  @Output() addedIngredientData = new EventEmitter<Ingredient>();

  ngOnInit() {
  }

  AddItem() {
    const ingredientData = new Ingredient(this.inputControl.nativeElement.value, this.amountControl.nativeElement.value);
    this.addedIngredientData.emit(ingredientData);
  }

  DeleteItem() {
  }

  ClearItems() {
  }

}
