import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import Any = jasmine.Any;

describe('AppComponent', () => {
  let fixture;
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    this.fixture = TestBed.createComponent(AppComponent);
    this.component = this.fixture.debugElement.componentInstance;

  }));

  it('should create the app', async(() => {
    expect(this.component).toBeTruthy();
  }));

  it(`should have as title 'CoursePlanner2'`, async(() => {
    expect(this.component.title).toEqual('CoursePlanner2');
  }));

  it('should render title in a h1 tag', async(() => {
    this.fixture.detectChanges();
    const compiled = this.fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(this.component.title);
  }));

  it(`should have as description 'Welcome to the new and improved CoursePlanner2'`, async(() => {
    expect(this.component.description).toEqual('Welcome to the new and improved CoursePlanner2');
  }));

  it('should render description in a h4 tag', async(() => {
    this.fixture.detectChanges();
    const compiled = this.fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain(this.component.description);
  }));

  it(`should have a Array of course object`, async(() => {
    this.component.ngOnInit();
    expect(this.component.courses instanceof Array).toBe(true);
  }));

  it(`Adding 3 courses to Array should provide 3 p tags`, async(() => {
    const compiled = this.fixture.debugElement.nativeElement;
    this.component.ngOnInit();
    this.fixture.detectChanges();
    this.component.courses = [
      {
        title: 'JS Web Apps'
      },
      {
        title: 'Android'
      },
      {
        title: 'Demo day'
      }
    ];
    this.fixture.detectChanges();
    expect(compiled.getElementsByTagName('p').length === 3).toBe(true);
  }));
});
