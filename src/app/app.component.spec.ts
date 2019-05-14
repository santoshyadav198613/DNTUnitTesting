import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should have title', () => {
    const appComponent = new AppComponent();
    expect(appComponent.title).toBe('AngularTestingApp');
  });
});

