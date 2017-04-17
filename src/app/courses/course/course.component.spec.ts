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

  it(`Adding a course to the CourseComponent should provide a h4 and p tag`, async(() => {
    const compiled = fixture.debugElement.nativeElement;
    component.ngOnInit();
    fixture.detectChanges();
    component.course = {
      id: 'jswebapps',
      title: 'JS Web Apps',
      description: 'This is a Course about Javascript applications'
    };
    fixture.detectChanges();
    expect(compiled.getElementsByTagName('h4').length === 1 &&
            compiled.getElementsByTagName('p').length === 1
    ).toBeTruthy();
  }));
});
