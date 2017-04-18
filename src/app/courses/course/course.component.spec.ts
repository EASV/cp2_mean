import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import {Course} from '../course';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a Course object`, async(() => {
    component.ngOnInit();
    expect(component.course).toBeDefined();
  }));

  it(`Adding a course to the CourseComponent should provide a h4 with title`, async(() => {
    const compiled = fixture.debugElement.nativeElement;
    component.ngOnInit();
    fixture.detectChanges();
    component.course = {
      id: 'jswebapps',
      title: 'JS Web Apps',
      description: 'This is a Course about Javascript applications'
    };
    fixture.detectChanges();
    expect(compiled.getElementsByClassName('course-title')[0].innerHTML.trim()
    ).toBe('JS Web Apps');
  }));

  it(`Adding a course to the CourseComponent should provide a p tag with description`, async(() => {
    const compiled = fixture.debugElement.nativeElement;
    component.ngOnInit();
    fixture.detectChanges();
    component.course = {
      id: 'jswebapps',
      title: 'JS Web Apps',
      description: 'This is a Course about Javascript applications'
    };
    fixture.detectChanges();
    fixture.detectChanges();
    expect(compiled.getElementsByClassName('course-description')[0].innerHTML.trim()
    ).toBe('This is a Course about Javascript applications');
  }));
});
