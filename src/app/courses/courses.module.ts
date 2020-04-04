import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesService } from '../course/services/courses.service';


@NgModule({
  declarations: [CoursesComponent, CoursesListComponent, CourseItemComponent, CourseDetailsComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
  ],
  exports: [CoursesComponent],
})
export class CoursesModule { }
