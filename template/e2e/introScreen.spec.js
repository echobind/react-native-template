describe('MyApp', () => {
  beforeEach(() => {
    device.reloadReactNative();
  });

  it('should have intro screen', () => {
    expect(element(by.id('introScreenText'))).toBeVisible();
    expect(element(by.id('introScreenText'))).toHaveText('Welcome to the intro Screen!');
  });
});
