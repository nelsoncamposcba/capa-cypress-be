const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env:{
      snapshotOnly: true,
      requestMode: true
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
