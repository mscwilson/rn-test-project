const { reloadApp } = require('detox-expo-helpers');

describe('App', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should show the step one message', async () => {
    await expect(element(by.id('stepOne'))).toBeVisible();
  });
});
