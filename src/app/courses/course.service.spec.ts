import { async, TestBed, inject } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';


import { CourseService } from './course.service';

describe('CourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourseService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }],
      imports: [
        HttpModule
      ]
    });
  });

  it('should construct', async(inject(
    [CourseService, MockBackend], (service, mockBackend) => {

      expect(service).toBeDefined();
    })));

  describe('Read all Courses shoudl return courses', () => {
    const mockResponse = {
      title: 'JS Web Apps',
      body: 'Hi there all you awesome students'
    };

    it('should parse response', async(inject(
      [CourseService, MockBackend], (service, mockBackend) => {

        mockBackend.connections.subscribe(conn => {
          conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockResponse) })));
        });

        service.readAll().subscribe(res => {
          expect(res).toEqual({
            title: 'JS Web Apps',
            body: 'Hi there all you awesome students'
          });
        });
      })));
  });
});
