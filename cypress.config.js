const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env:{
      snapshotOnly: true,
      requestMode: true,

      login_url: "/login_url",
      jsonplaceholder: "https://jsonplaceholder.typicode.com",
      google: "https://google.com.ar"

    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
