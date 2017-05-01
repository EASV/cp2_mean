import {Component, OnInit} from '@angular/core';
import {Course} from './courses/course';
import {CourseService} from './courses/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  courses: Array<Course>;
  title = 'CoursePlanner2';
  description = 'Welcome to the new and improved CoursePlanner2';

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courses = this.courseService.readAll();
  }
}
