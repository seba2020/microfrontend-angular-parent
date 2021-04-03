import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-wrapper',
  template: `
    <micro-app
      *axLazyElement="link"
      (emitDataToParent)="dataToParent($event)"
      [dataFromParent]="dataToChild"
    ></micro-app>
  `,
  styles: [
  ]
})
export class ChildWrapperComponent implements OnInit {
  link = 'http://localhost:3000/main.js';
   @Input() dataToChild = '';
   @Output() dataFromChild = new EventEmitter<string>();
   listOfData = [];

  constructor() { }

  ngOnInit(): void {
  }

  dataToParent($event: any) {
    this.dataFromChild.emit($event.detail);
  }

}
