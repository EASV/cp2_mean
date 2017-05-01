import {Component, OnInit} from '@angular/core';
import {Course} from './courses/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  courses: Array<Course>;
  title = 'CoursePlanner2';
  description = 'Welcome to the new and improved CoursePlanner2';

  constructor() { }

  ngOnInit() {
    this.courses = [];
    this.courses = [
      {
        id: 'jswebapps',
        title: 'JS Web Apps',
        description: 'JS Web Apps description here!'
      },
      {
        id: 'android',
        title: 'Android',
        description: 'Android description here!'
      },
      {
        id: 'demoday',
        title: 'Demo day',
        description: 'Demo day description here!'
      }
    ];
  }
}
