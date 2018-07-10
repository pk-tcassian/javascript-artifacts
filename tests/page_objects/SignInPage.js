'use strict';

var expect = require('chai').expect;

module.exports = {
    elements: {
      body: 'body',
      emailTxt :{
        selector : "input[type='email']"
      },
      passwordTxt :{
        selector : "input[type='password']"
      },
      signInBtn : {
        selector: '//button[contains(text(),"Sign in")]',
        locateStrategy: 'xpath' 
      }
    },
  
   commands : [{
      //Performs a new user sign in
       performSignIn : function(emailId, password) {
          return this.waitForElementVisible('@emailTxt', 5000)
                  .setValue('@emailTxt', emailId)
                  .setValue('@passwordTxt', password)
                  .click('@signInBtn');            
       }
   }]
  };