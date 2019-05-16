import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header-component',
    templateUrl: './header-component.html'
})
export class HeaderComponent {
    @Output() messageEvent = new EventEmitter<string>();

    changeComponent(event) {
        this.messageEvent.emit(event.toElement.text);
    }
}
