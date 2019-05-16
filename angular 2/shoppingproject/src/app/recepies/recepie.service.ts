import { Recepie } from "./recepies.model";
import { EventEmitter } from "@angular/core";

export class RecepieService{

    recepieSelected = new EventEmitter<Recepie>();

    private recepies: Recepie[] = [
        new Recepie(1, 'Recepie 1', 'This is recepie 1',
        'https://www.bbcgoodfood.com/sites/default/files/baked-sea-bass-with-lemon-caper-dressing_1.jpg'),
        new Recepie(2, 'Recepie 2', 'This is recepie 2',
        'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg'),
        new Recepie(3, 'Recepie 3', 'This is recepie 3',
        'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/farce-a-la-saucisse-et-aux-pommes-7a8deb53.jpg')
      ];

      getRecepies(){
          return this.recepies.slice(); //returning new array by slice not reference like(this.rcepies)
      }
}