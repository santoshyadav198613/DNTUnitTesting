import { Routes, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';


@Component({
  template: `home`
})
export class Component1 {

}

@Component({
  template: `user`
})
export class Component2 {

}

@Component({
  template: `routerform`
})
export class Component3 {

}

const routes: Routes = [
  { path: 'home', component: Component1 },
  { path: 'user', component: Component2 },
  { path: 'routerform', component: Component3 },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

describe('Router', () => {

  let location: Location;
  let router: Router;
  let fixture;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        Component1, Component2, Component3
      ],
      imports: [RouterTestingModule.withRoutes(routes)]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);
  });

  it('should navigate to home', fakeAsync(() => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/home');
    });
  }));
});
