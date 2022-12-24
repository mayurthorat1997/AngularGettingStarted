import { outputAst } from "@angular/compiler";
import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";


@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
    })
export class StarComponent
{
cropWidth: number=75;
@Input() rating: number=0;
@Output() ratingClicked: EventEmitter<string> =
new EventEmitter();

ngOnChanges():void{
    this.cropWidth=this.rating * 75/5;
}
onClick():void{
  this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);  
}
}