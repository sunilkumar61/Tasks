import { Component, OnInit, ViewChildren } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css'],
})
export class Parent2Component implements OnInit {
  @ViewChildren(Child2Component) child2Component!: Child2Component;
  allStudent: any;

  constructor() {}

  ngOnInit(): void {}
  recieveData() {
    this.allStudent = this.child2Component.sendData();
    return this.allStudent;
  }
}
