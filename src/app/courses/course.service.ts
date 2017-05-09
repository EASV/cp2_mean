import { Injectable } from '@angular/core';
import {Course} from './course';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseService {

  constructor(private http: Http) { }

  readAll(): Observable<Course[]> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json() as Course[]);
  }
}
