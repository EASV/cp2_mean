import { Injectable } from '@angular/core';
import {Course} from './course';

@Injectable()
export class CourseService {

  constructor() { }

  readAll(): Course[] {
    return [
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
