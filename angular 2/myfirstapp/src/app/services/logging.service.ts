import {ChildLoggingService} from "./ChildLogging.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()

export class LoggingService{ //service is just a simple class
    constructor(private childLoggingService: ChildLoggingService){}

    PassingData = new EventEmitter<string>(); // passing data from 1 component to another with service

    logService(log: string){
        console.log(log);
    }

    logServiceChange(log: string){
        this.childLoggingService.logService(log);
    }
}