import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private courseSubject = new BehaviorSubject(null);

  private courses = [
    {
      id: 1,
      title: 'Java',
      instructor: 'Ali',
      isAvailabel: true,
    },
    {
      id: 2,
      title: 'Python',
      instructor: 'Mahmoud',
      isAvailabel: false,
    },
    {
      id: 3,
      title: 'HTML',
      instructor: 'Ali',
      isAvailabel: true,
    },
    {
      id: 4,
      title: 'Angular',
      instructor: 'Eman',
      isAvailabel: false,
    },
  ];

  changeCourseData(data) {
    this.courseSubject.next(data);
  }

  get courseSubjectObservable() {
    return this.courseSubject.asObservable();
  }

  getCourses() {
    return this.courses;
  }

  getCourseById(id) {
    return this.courses.find((course) => course.id == id);
  }

  constructor() { }
}
