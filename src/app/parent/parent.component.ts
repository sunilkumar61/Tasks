import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  Cdata: any = [];

  constructor() {}

  ngOnInit(): void {}

  onChanges(event: any) {
    this.Cdata = event;
  }
}
