'use strict';

var expect = require('chai').expect;
let globals = require('../helpers/globals.js');

module.exports = {
  elements: {
    signInBtn: {
      selector: "//button[contains(text(),'Sign in')]",
      locateStrategy: 'xpath'
    },
    userNameTxt: {
      selector: "input[type='text']"
    },
    emailTxt: {
      selector: "input[type='email']"
    },
    passwordTxt: {
      selector: "input[type='password']"
    }
  },

  commands: [{
    //Verifies whether the Sign Page has loaded
    verifySignUp: function () {
      return this.waitForElementVisible('@signInBtn', globals.waitForConditionTimeout)
        .assert.containsText('@signInBtn', "Sign in")
    },

    //Performs a new user sign up
    enterUserDetails: function (userName, emailId, password) {
      return this.setValue('@userNameTxt', userName).setValue('@emailTxt', emailId)
        .setValue('@passwordTxt', password).click('@signInBtn');
    },

    //Performs a new user sign up
    clickSignIn: function () {
      return this.click('@signInBtn');
    }
  }]
};