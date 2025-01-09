const { defineConfig } = require("cypress");
module.exports = defineConfig({
  screenshot:true,
  video:true,
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      
    },
  },
  env:{
    baseURL: "https://qatest.marcombox.com",
    userEmail: "sash.dqa@gmail.com",
    password: "Abid1234"
  }
});
