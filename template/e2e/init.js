/*global jasmine */
/*eslint no-undef: "error"*/
import detox, { device } from 'detox';
import adapter from 'detox/runners/jest/adapter';
import specReporter from 'detox/runners/jest/specReporter';
import config from '../package.json'; // .detox;

// Set the default timeout
jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

// This takes care of generating status logs on a per-spec basis. By default, jest only reports at file-level.
// This is strictly optional.
jasmine.getEnv().addReporter(specReporter);

beforeAll(async () => {
  await detox.init(config.detox, { launchApp: false });
  await device.launchApp({
    /** this is where you can set what permissions might be needed */
    // permissions: { notifications: 'YES', camera: 'YES' },
    newInstance: true,
  });
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});
