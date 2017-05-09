import {Component, OnDestroy, OnInit} from '@angular/core';
import {Course} from '../courses/course';
import {Subscription} from 'rxjs/Subscription';
import {CourseService} from '../courses/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  courses: Array<Course>;
  title = 'CoursePlanner2';
  description = 'Welcome to the new and improved CoursePlanner2';
  courseServiceSub: Subscription;

  constructor(private courseService: CourseService) {
    this.courses = [];
  }

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
