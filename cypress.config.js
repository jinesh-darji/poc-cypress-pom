const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  evn: {
    application_url: "https://develop.buidler.etherspot.io/",
  },
});
