'use strict';

var expect = require('chai').expect;
let globals = require('../helpers/globals.js');

module.exports = {
  elements: {
    articleContainer: {
      selector: "div[class='article-page'] div[class='container']"
    },
    articleHeading: {
      selector: "div[class='article-page'] div[class='container'] h1"
    },
    articleContent: {
      selector: "div[class='row article-content'] div[class='col-xs-12'] div p"
    }
  },

  commands: [{
    //Verifies the Article Heading
    verifyArticleHeading: function (articleHeading) {
      return this.waitForElementVisible('@articleContainer', globals.waitForConditionTimeout)
        .assert.containsText('@articleHeading', articleHeading);
    },

    //Verifies the Article Content
    verifyArticleContent: function (articleContent) {
      return this.waitForElementVisible('@articleContainer', globals.waitForConditionTimeout)
        .assert.containsText('@articleContent', articleContent);
    },
  }]
};