import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../../course/services/courses.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  course;
  private routeParamsSubscription: Subscription;
  constructor(
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute
  ) {
    console.log('constructor');
  }

  ngOnInit(): void {
    this.routeParamsSubscription = this.activatedRoute.paramMap.subscribe(
      (paramMap) => {
        console.log(paramMap);
        if (paramMap.has('id')) {
          const id = paramMap.get('id');
          this.course = this.coursesService.getCourseById(id);
        }
      }
    );
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    // this.courseSubscription.unsubscribe();
    this.routeParamsSubscription.unsubscribe();
  }
}
