import { NameSurnamePipe } from './name-surname.pipe';

describe('NameSurnamePipe', () => {
  it('create an instance', () => {
    const pipe = new NameSurnamePipe();
    expect(pipe).toBeTruthy();
  });
});
