import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { CourseComponent } from './courses/course/course.component';
import {CourseService} from 'app/courses/course.service';
import { HomeComponent } from './home/home.component';

const routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CourseService,
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
