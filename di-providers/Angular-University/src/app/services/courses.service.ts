import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Course } from '../course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Course[] = [ 
    {
      id: 245,
      name: "dotnet 4.5v",
      desc: "it's a short course.",
      price: 119
    },
    {
      id: 568,
      name: "Spring Boot and Angular 12",
      desc: "It's a course that can put you on the market!",
      price: 499
    },
    {
      id: 54,
      name: "Java",
      desc: "It's the basics of java and its archicteture.",
      price: 89
    },
  ]

  constructor(private http: HttpClient) { }

  GetCourses(): Course[] {
    return this.courses;
  }
}
