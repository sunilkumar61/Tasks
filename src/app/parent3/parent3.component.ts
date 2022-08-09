import { Component, ContentChildren, OnInit } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css'],
})
export class Parent3Component implements OnInit {
  @ContentChildren(Child2Component) child2Component!: Child2Component;

  constructor() {}

  ngOnInit(): void {}
}
