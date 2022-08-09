import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // outputs: ['childEvent'],
})
export class ChildComponent implements OnInit {
  @Output() childEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChange() {
    this.childEvent.emit(['Sunil', 'Satish', 'Praveen', 'Hari', 'kousik']);
  }
}
