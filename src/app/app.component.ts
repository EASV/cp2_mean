import {Component, OnDestroy, OnInit} from '@angular/core';
import {Course} from './courses/course';
import {CourseService} from './courses/course.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  courses: Array<Course>;
  title = 'CoursePlanner2';
  description = 'Welcome to the new and improved CoursePlanner2';
  courseServiceSub: Subscription;
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseServiceSub = this.courseService.readAll().subscribe(courses => {
      this.courses = courses;
    });
  }

  ngOnDestroy() {
    if (this.courseServiceSub) {
      this.courseServiceSub.unsubscribe();
    }
  }
}
