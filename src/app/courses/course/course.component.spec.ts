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

  it(`Adding a course should provide a h3, h4 and p tag`, async(() => {
    const compiled = this.fixture.debugElement.nativeElement;
    this.component.ngOnInit();
    this.fixture.detectChanges();
    this.component.course = {
      id: 'jswebapps',
      title: 'JS Web Apps'
    };
    this.fixture.detectChanges();
    expect(compiled.getElementsByTagName('h3').length === 1 &&
            compiled.getElementsByTagName('h4').length === 1 &&
            compiled.getElementsByTagName('p').length === 1
    ).toBeTruthy();
  }));
});
