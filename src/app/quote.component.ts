import { Component, Input, Output, EventEmitter } from '@angular/core';
/*
@Component({
    selector: 'quote',
    template: `
    <div>
    <h2>Quote</h2>
    <p>{{quote.line}} - {{quote.author}}</p>
    </div>`
})
*/
@Component({
    selector: 'quote',
    template: `
    <style>.quote
    {
        color: white;
        background-color:black;
        text-transform: capitalize;
    }
    </style>
    <div>
    <h2>My Quote</h2>
    <p class = 'quote'>{{quote.line}} - {{quote.author}}</p>
    </div>`
})
export class QuoteComponent {
    @Input() author;
    @Output() invalidAuthor = new EventEmitter();

    quote = {
        "line": "With great power comes great responsibility!",
        "author": "Uncle Ben"
    }
}