import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from '../course.service';
import {Course} from '../course';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-course-manager',
  templateUrl: './course-manager.component.html',
  styleUrls: ['./course-manager.component.css']
})
export class CourseManagerComponent implements OnInit, OnDestroy {
  courses: Array<Course>;
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
