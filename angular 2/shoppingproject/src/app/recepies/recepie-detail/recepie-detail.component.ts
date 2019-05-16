import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepies.model';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {

  @Input() recepieDetail: Recepie = new Recepie(0, '', '', '');

  constructor() { }

  ngOnInit() {
  }

}
