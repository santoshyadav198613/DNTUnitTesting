import { UserComponent } from './user.component';
import { UserService } from '../../services/user.service';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserComponent', () => {
  let userService: UserService;
  let fixture: ComponentFixture<UserComponent>;
  let http: jasmine.SpyObj<HttpClient>;


  beforeEach(() => {
    http = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        UserService,
        {
          provide: HttpClient, useValue: http
        }
      ]
    });

    userService = TestBed.get(UserService);
    fixture = TestBed.createComponent(UserComponent);
  });

  it('should get users', () => {
    const users: User[] = [{
      id: 1,
      name: 'Ankit',
      email: 'ankit@gmail.com',
      phone: '546546456'
    },
    {
      id: 2,
      name: 'Mohan Chauhan',
      email: 'mohan@gmail.com',
      phone: '5645654645'
    }];

    http.get.and.returnValue(of(users));

    userService.GetUsers().subscribe(result => {
      fixture.detectChanges();
      expect(fixture.componentInstance.users.length).toEqual(result.length);
    });

  });


  it('should get users', () => {
    const users: User[] = [{
      id: 1,
      name: 'Ankit',
      email: 'ankit@gmail.com',
      phone: '546546456'
    },
    {
      id: 2,
      name: 'Mohan Chauhan',
      email: 'mohan@gmail.com',
      phone: '5645654645'
    }];

    http.get.and.returnValue(of(users));

    userService.GetUsers().subscribe(result => {
      fixture.detectChanges();
      const element = fixture.debugElement.queryAll(By.css('tr'));

      expect(element.length).toEqual(3);
    });

  });

});
