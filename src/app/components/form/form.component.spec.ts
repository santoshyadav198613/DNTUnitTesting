import { FormComponent } from './form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormComponent', () => {

  let fixture: ComponentFixture<FormComponent>;


  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [ReactiveFormsModule]
    });

    fixture = TestBed.createComponent(FormComponent);
  });

  it('should have form status as invalid', () => {
    expect(fixture.componentInstance.form.invalid).toBe(true);
  });

  it('should have form status as valid', () => {
    fixture.componentInstance.form.patchValue({
      name: 'User1',
      email: 'user1@gmail.com',
      address: 'Mumbai'
    });
    fixture.detectChanges();
    expect(fixture.componentInstance.form.invalid).toBe(false);
  });
});
