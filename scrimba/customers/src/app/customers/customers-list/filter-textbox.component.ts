import { outputAst } from "@angular/compiler";
import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
/* as the user types in the input the set filter gets called and updates _filter and calls get */
@Component({
    selector: 'app-filter-textbox',
    template: `
    Filter: <input type="text" [(ngModel)]="filter"/> 
    `
})
export class FilterTextBoxComponent implements OnInit{

    private _filter: string = '';
    @Input() get filter(){
        return this._filter
    }
    set filter(val: string){
        this._filter = val;
        this.changed.emit(this._filter)
    }
    @Output() changed: EventEmitter<string> = new EventEmitter<string>(); /* way to send data from child to parent, we are sending a string */
    constructor(){}
    ngOnInit(){}
}