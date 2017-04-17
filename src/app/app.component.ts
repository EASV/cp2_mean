import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  courses: Array<any>;
  title = 'CoursePlanner2';
  description = 'Welcome to the new and improved CoursePlanner2';

  ngOnInit() {
    this.courses = [];
  }
}
