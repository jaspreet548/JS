import { Component } from '@angular/core';
import { Recepie } from './recepies.model';
import { RecepieService } from './recepie.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecepieService]
})
export class RecepiesComponent {
  recepieDetail: Recepie;

  constructor(private recepieService: RecepieService){}

  ngOnInit(){
    this.recepieService.recepieSelected
    .subscribe(
      (recepie: Recepie) => {
        this.recepieDetail = recepie;
      }
    );
  }
}
