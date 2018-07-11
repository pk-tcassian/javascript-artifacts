'use strict';

var expect = require('chai').expect;
let globals = require('../helpers/globals.js');

module.exports = {
  elements: {
    body: 'body',
    emailTxt: {
      selector: "input[type='email']"
    },
    passwordTxt: {
      selector: "input[type='password']"
    },
    signInBtn: {
      selector: '//button[contains(text(),"Sign in")]',
      locateStrategy: 'xpath'
    }
  },

  commands: [{
    //Performs a new user sign in
    performSignIn: function (emailId, password) {
      return this.waitForElementVisible('@emailTxt', globals.waitForConditionTimeout)
        .setValue('@emailTxt', emailId)
        .setValue('@passwordTxt', password)
        .click('@signInBtn');
    }
  }]
};