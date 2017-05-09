import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import Any = jasmine.Any;
import {AppModule} from '../app.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it(`should have as title 'CoursePlanner2'`, async(() => {
    expect(component.title).toEqual('CoursePlanner2');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(component.title);
  }));

  it(`should have as description 'Welcome to the new and improved CoursePlanner2'`, async(() => {
    expect(component.description).toEqual('Welcome to the new and improved CoursePlanner2');
  }));

  it('should render description in a h4 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain(component.description);
  }));

  it(`should have a Array of course object`, async(() => {
    component.ngOnInit();
    expect(component.courses instanceof Array).toBe(true);
  }));

  it(`Adding 3 courses to Array should provide 3 app-course tags`, async(() => {
    const compiled = fixture.debugElement.nativeElement;
    component.ngOnInit();
    fixture.detectChanges();
    component.courses = [
      {
        id: 'jswebapps',
        title: 'JS Web Apps'
      },
      {
        id: 'android',
        title: 'Android'
      },
      {
        id: 'demoday',
        title: 'Demo day'
      }
    ];
    fixture.detectChanges();
    expect(compiled.getElementsByTagName('app-course').length === 3).toBe(true);
  }));
});
