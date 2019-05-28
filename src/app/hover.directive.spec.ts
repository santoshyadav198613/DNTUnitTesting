import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HoverDirective } from './hover.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
@Component({
  template: '<h2 appHover>User List</h2>'
})
class TestComponent { }

describe('HoverDirective', () => {
  let testComponent: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        declarations: [TestComponent, HoverDirective]
      });

    testComponent = TestBed.createComponent(TestComponent);
  });
  it('should change background color', () => {
    let element = testComponent.debugElement.query(By.directive(HoverDirective));
    element.triggerEventHandler('mouseenter', null);
    testComponent.detectChanges();
    expect(element.nativeElement.style.backgroundColor).toBe('red');
      //  expect(directive).toBeTruthy();
  });
});
