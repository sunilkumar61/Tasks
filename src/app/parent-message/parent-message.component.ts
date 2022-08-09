import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildMessageComponent } from '../child-message/child-message.component';

@Component({
  selector: 'app-parent-message',
  templateUrl: './parent-message.component.html',
  styleUrls: ['./parent-message.component.css'],
})
export class ParentMessageComponent implements OnInit {
  @ViewChild(ChildMessageComponent)
  childMessageComponent!: ChildMessageComponent;
  allStudent: any;

  constructor() {}

  ngOnInit(): void {}

  receiveData() {
    this.allStudent = this.childMessageComponent.sendData();
  }
}
