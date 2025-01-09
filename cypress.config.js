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
    yopMail: "https://yopmail.com/",
    apiKey: "9623c33977762f880d5e693983dc2878c3904fa9247feeac866567c27559cd1c",
    userEmail: "sash.dqa@gmail.com",
    password: "Abid1234"
  }
});
