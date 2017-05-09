import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseComponent } from './courses/course/course.component';
import {CourseService} from "app/courses/course.service";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
