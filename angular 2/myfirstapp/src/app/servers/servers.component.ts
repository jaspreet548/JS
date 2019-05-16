import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-servers',
  template:'<p>this is awesome</p> <app-server><hr></app-server>', // it will overwrite template url, 
  //it checks for last one template included so we get templateUrl 
  templateUrl: './servers.component.html', 
  styleUrls: ['./servers.component.css'] , //can be multiple or inline ([h3{ color:red;}]) 
  encapsulation: ViewEncapsulation.None, //style is now global
  providers:[LoggingService] 
})
export class ServersComponent implements OnInit {

  dataToChild = "This is parent data passing to child";
  dataFromChild : string ="";

  receiveMessage(event){
    this.dataFromChild = event;
    console.log("@Output example : " + this.dataFromChild)
  };

  constructor(private loggingService: LoggingService) { 
    this.loggingService.PassingData.subscribe(
      (data: string) => this.loggingService.logServiceChange(data)
    );
  }

  ngOnInit() {
  }

}
