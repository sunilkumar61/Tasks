import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  students = [
    { id: 1, name: 'Sunil' },
    { id: 2, name: 'Satish' },
    { id: 3, name: 'Praveen' },
    { id: 4, name: 'Hari' },
    { id: 5, name: 'Koushik' },
  ];

  constructor() {}

  getAllStudents(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.students);
      }, 3000);
    });
  }
}
