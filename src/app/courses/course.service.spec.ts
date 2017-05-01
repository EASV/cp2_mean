import {async, TestBed, inject} from '@angular/core/testing';
import {BaseRequestOptions, Http, HttpModule, Response, ResponseOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';


import {CourseService} from './course.service';
import {Course} from './course';

describe('CourseService', () => {
  const mockResponse = [{
    id: 'jswebapps',
    title: 'JS Web Apps',
    description: 'JS Web Apps description here!'
  },
    {
      id: 'android',
      title: 'Android',
      description: 'Android description here!'
    }];
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
    [CourseService], (service) => {
      expect(service).toBeDefined();
    })));

  it('readAll should return observable with a []', async(inject(
    [CourseService], (service) => {
      service.readAll().subscribe(res => {
          expect(res instanceof Array).toBeTruthy();
          expect(res.length >= 0);
      });
    })));
/*
  it('ReadAll should parse json as a Course[]', async(inject(
    [CourseService, MockBackend], (service, mockBackend) => {

      mockBackend.connections.subscribe(conn => {
        conn.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(mockResponse)})));
      });

      service.readAll().subscribe(res => {
        expect(res).toEqual([{
          id: 'jswebapps',
          title: 'JS Web Apps',
          description: 'JS Web Apps description here!'
        },
          {
            id: 'android',
            title: 'Android',
            description: 'Android description here!'
          }]);
      });
    })));*/
});
