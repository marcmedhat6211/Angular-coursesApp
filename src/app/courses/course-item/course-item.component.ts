import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  constructor() { }

  @Input('courseData') course;
  @Output() courseClick = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onClick(){
    this.courseClick.emit(this.course.title)
  }

}
