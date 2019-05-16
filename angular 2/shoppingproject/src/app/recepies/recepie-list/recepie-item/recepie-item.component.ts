import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecepieService } from '../../recepie.service';
import { Recepie } from '../../recepies.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  recepies = [];

  @Input() recepieItem: Recepie;
  //@Output() selectedItem = new EventEmitter<number>();

  constructor(private recepieService : RecepieService) { }

  ngOnInit() {
  }

  getCurrentItem() {
    this.recepieService.recepieSelected.emit(this.recepieItem);
    //this.selectedItem.emit(id);
  }
}
