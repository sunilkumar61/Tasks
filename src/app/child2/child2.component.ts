import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component implements OnInit {
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
