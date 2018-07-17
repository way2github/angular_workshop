import { Component } from '@angular/core';

@Component({
    selector: 'border',
    template: `
    <div style=
    "border: 4px solid black; 
    border-radius: 5px;
    box-shadow: 5px 5px 5px #333;
    width: 200px">
        <ng-content></ng-content>
    </div>
    `
})
export class BorderComponent {
}