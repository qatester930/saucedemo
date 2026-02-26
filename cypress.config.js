const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'SuaceDemo Automation Report',
    embeddedScreenshots: true,  // Enable screenshots in report
    inlineAssets: true,  // Enable inline assets for email compatibility
    saveAllAttempts: true,
    reportFilename: "Report-[datetime]-report",
    timestamp: "longDate",
    jsonDir: "cypress/reports/json",
    reportDir: "cypress/reports/html",
    overwrite: true,
    html: true,
    json: true,
    quiet: false  // Show detailed logging
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://www.saucedemo.com/',
    retries: { runMode: 0, openMode: 0 },
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 200000,
  },
});
