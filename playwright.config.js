
const config = {
  use: {
    testDir: '__tests__',
    timeout: 60 * 60 * 1000,
    headless: false,
    browserName: 'chromium',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    reporter: [ 'html', 'experimental-allure-playwright' ],
    trace: 'retain-on-failure',
    channel: 'chrome',
    screenshot: 'only-on-failure',
    workers: 1,
    video: 'on'
  }
};

module.exports = config;