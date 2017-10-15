import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input class="todo-input" [value]="title" 
        (keyup.enter)="changeTitle(inputElement)" #inputElement>
    <button class="btn" (click)="changeTitle(inputElement)">
        Save
     </button>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  title: string = '';

  constructor() {}

  ngOnInit() {
  }

  changeTitle(newTitle: any): void {
    this.submit.emit(newTitle.value);
  }

}
