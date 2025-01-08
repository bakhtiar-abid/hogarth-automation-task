const { defineConfig } = require("cypress");
const dotenv = require('cypress-dotenv');

module.exports = defineConfig({
  screenshot:true,
  video:true,
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.env.USEREMAIL = process.env.USEREMAIL; // Load USEREMAIL
      config.env.PASSWORD = process.env.PASSWORD; 
      config = dotenv(config); // Load the .env variables
      return config;
      // implement node event listeners here
      
    },
  },
  env:{
    baseURL: "https://qatest.marcombox.com",
    
  }
});
