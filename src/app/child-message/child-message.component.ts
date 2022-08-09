import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-child-message',
  templateUrl: './child-message.component.html',
  styleUrls: ['./child-message.component.css'],
})
export class ChildMessageComponent implements OnInit {
  allStudents: Promise<any>;
  student: any;

  constructor(private studentService: StudentsService) {
    this.allStudents = studentService.getAllStudents();
  }

  ngOnInit(): void {}

  sendData() {
    this.student = this.allStudents;
    return this.student;
  }
}
