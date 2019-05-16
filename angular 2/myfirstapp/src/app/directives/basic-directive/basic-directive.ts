import { OnInit, ElementRef, Directive } from "@angular/core";

@Directive({
    selector: '[appBasicDirective]'
})
export class BasicDirective implements OnInit{
    constructor(private elementRef: ElementRef){ // injecting element reference

    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green'; //it is not a good practice to select element style like this 
    }
}