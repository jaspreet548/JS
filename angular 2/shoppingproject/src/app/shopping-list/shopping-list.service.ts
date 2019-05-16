import { Ingredient } from "../shared/ingredients.model";

export class ShoppingListService{
    private ingredients: Ingredient [] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 5)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

}