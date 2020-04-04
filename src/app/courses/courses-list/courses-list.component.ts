import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../course/services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses;
  clickedCourseTitle;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  onCourseClick(ev) {
    this.clickedCourseTitle = ev;
  }

  onCourseItemClick(course) {
    this.coursesService.changeCourseData(course);
  }
}
