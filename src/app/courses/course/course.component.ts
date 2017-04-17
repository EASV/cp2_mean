import { Component, OnInit } from '@angular/core';
import {Course} from '../course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: Course;

  constructor() { }

  ngOnInit() {
    this.course = <Course> {};
  }

}
