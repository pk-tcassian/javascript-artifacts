'use strict';

var expect = require('chai').expect;
let globals = require('../helpers/globals.js');

module.exports = {
  url: 'https://react-redux.realworld.io/#/settings?',

  elements: {
    body: 'body',
    logout: {
      selector: "//button[contains(text(), 'click here to logout')]",
      locateStrategy: 'xpath'
    }
  },

  commands: [{
    // Clicks the Sign In link at the top right corner
    performLogout: function () {
      return this.waitForElementVisible('@logout', globals.waitForConditionTimeout).click('@logout');
    }
  }]
};