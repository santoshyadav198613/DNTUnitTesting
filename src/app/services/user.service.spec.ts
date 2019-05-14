import { UserService } from './user.service';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { of } from 'rxjs';



describe('UserService', () => {
  let http: jasmine.SpyObj<HttpClient>;
  let userService: UserService;

  http = jasmine.createSpyObj('HttpClient', ['get', 'post']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        {
          provide: HttpClient, useValue: http
        }
      ]
    });

    userService = TestBed.get(UserService);
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
      expect(result.length).toEqual(2);
    });
  });

  it('should add user', () => {
    const user: User = {
      id: 1,
      name: 'Ankit',
      email: 'ankit@gmail.com',
      phone: '546546456'
    };

    http.post.and.returnValue(of(user));

    userService.AddUser(user).subscribe(result => {
      expect(result.name).toEqual('Ankit');
    });
  });

});
