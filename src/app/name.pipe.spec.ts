import { NamePipe } from './name.pipe';

describe('NamePipe', () => {
  let pipe;
  beforeEach(() => {
    pipe = new NamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should tranform name', () => {
    expect(pipe.transform('Sachin')).toContain('Sachin');
  });

});
