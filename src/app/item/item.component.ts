import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <div class="todo-item"> <span class="todo-title"> {{ item.title }} </span> <button class="btn btn-red" (click)="removeItem()">Delete</button> </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  @Output() remove:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.item);
  }

}
