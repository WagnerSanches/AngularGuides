import { HttpClient } from '@angular/common/http';
import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Course } from './course';
import { CoursesService } from './services/courses.service';

export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

function coursesServiceProvider(http: HttpClient): CoursesService {
  return new CoursesService(http);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',],
  providers: [
    {
      provide: COURSES_SERVICE, 
      useFactory: coursesServiceProvider,
      deps: [HttpClient]
    }
  ]
})
export class AppComponent implements OnInit{
  title = 'Angular-University';

  courses: Course[] | undefined;

  constructor(@Inject(COURSES_SERVICE) private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.coursesService.GetCourses();
  }


}
