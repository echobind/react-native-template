describe('Intro Screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  describe('on load', () => {
    it('shows the expected text', async () => {
      await expect(element(by.id('introScreenText'))).toExist();
    });
  });
});
