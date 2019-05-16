import { OnInit, ElementRef, Directive, Renderer2, HostListener } from "@angular/core";

@Directive({
    selector: '[appBasicBetterDirective]'
})
export class BasicBetterDirective implements OnInit{
    constructor(private renderer: Renderer2, private elementRef: ElementRef){ // injecting element reference

    }

    ngOnInit(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','yellow');
    }

    @HostListener('mouseenter') mouseover(eventData: Event){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','blue')
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','yellow')
    }
}