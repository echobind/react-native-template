import { trimText } from './trimText';

describe('trimText', () => {
  it('should trim a long string to the alloted length', () => {
    const longString = 'a'.repeat(100);
    const newLength = 30;
    const shortString = 'a'.repeat(newLength) + '...';

    expect(trimText(longString, newLength)).toEqual(shortString);
  });
  it('should trim a long string to the default length', () => {
    const longString = 'a'.repeat(100);
    const shortString = 'a'.repeat(70) + '...';

    expect(trimText(longString)).toEqual(shortString);
  });
});
