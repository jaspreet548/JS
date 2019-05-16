import {Component, Input, Output, EventEmitter, ViewChild, OnInit, 
    OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
    AfterViewInit, AfterViewChecked, OnDestroy, 
    ContentChild, 
    ElementRef} from '@angular/core';

import {LoggingService} from '../services/logging.service';

@Component({ // this is component decorator 
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`.textClass{color:green;} `]     
})
export class ServerComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
    
    componentName : string = "This is app-server component";
    allowButton : boolean = false;
    buttonClicked : number = 1;
    twoWayString = "This is string";
    switchCaseNumber = 4; 
    ngStyleEle = {
        "color" : "white",
        "background-color" : "coral",
        "font-size" : "14px",
        "padding" : "14px"
    }
    isNgClassApply = true;
    ngForElements = [1,2,3,4,5];

    @Input() dataToChild : string;

    @Output() messageEvent = new EventEmitter<string>(); //dataToParent

    localReferenceData = "";

    @ViewChild('input1Data') input1Data; // asscessing local reference from component by ViewChild
    localReferenceDataComponent = "";
    @ContentChild("contentParagraph") contentParagraph :ElementRef; //accessing parent ng-template local reference

    constructor(private loggingService: LoggingService) { 
        this.messageEvent.emit("This is data to parent from child"); // it will not work, we have to use set timeout 
    }

    onButtonClick(){
        this.buttonClicked++ ; 
    };

    onButton1Click(){
        this.messageEvent.emit("This is data to parent from child");
    };

    onButton2Click(){
        const log = new LoggingService(null); // this is not better approach, to create instances to access service, we use dependeny injector
        log.logService("This is sample log by creating instance, which is not better approach !!");
        this.loggingService.logServiceChange("This is sample log by dependency injector."); // also there is no provider of service in container
        // because it is using service from it's parent (it's hierarchical injector)
    };

    localReference(ele){
        this.localReferenceData = ele.value;
        this.localReferenceDataComponent = this.input1Data.nativeElement.value;
    }

    PassingData(){
        this.loggingService.PassingData.emit("This is data from server component passing by service");
    }

    ngOnChanges(): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        console.log("ngOnChanges Called !!");
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log("ngOnInit Called !!");
    }

    ngDoCheck(): void {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        console.log("ngDoCheck Called !!");
    }

    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        console.log("ngAfterContentInit Called !!");
        console.log("ContentChild data : " + this.contentParagraph.nativeElement.textContent);
    }

    ngAfterContentChecked(): void {
        //Called after every check of the component's or directive's content.
        //Add 'implements AfterContentChecked' to the class.
        console.log("ngAfterContentChecked Called !!");
    }

    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        console.log("ngAfterViewInit Called !!");
    }

    ngAfterViewChecked(): void {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        console.log("ngAftrViewChecked Called !!");
    }

    ngOnDestroy(): void { 
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        //When instance of component is destroyed.
        console.log("ngOnDestroy Called !!");
    }

}