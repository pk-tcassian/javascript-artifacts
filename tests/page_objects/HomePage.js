'use strict';

var expect = require('chai').expect;

module.exports = {
    url: 'https://react-redux.realworld.io',
  
    elements: {
      body: 'body',
      signInLink :{
        selector: '//a[contains(text(),"Sign in")]',
        locateStrategy: 'xpath'
      },
      signUpLink :{
        selector: '//a[contains(text(),"Sign up")]',
        locateStrategy: 'xpath' 
      },
      newPostLink :{
        selector : "a[href='#editor']"
      },
      settingsLink :{
        selector: "a[href='#settings']"
      },
      feedContainer :{
        selector : "div[class='col-md-9']"
      },
      yourFeed :{
        selector : "//a[contains(text(), 'Your Feed')]",
        locateStrategy: 'xpath' 
      },
      globalFeed :{
        selector : "//a[contains(text(), 'Global Feed')]",
        locateStrategy: 'xpath' 
      }
    },
  
   commands : [{
      // Clicks the Sign In link at the top right corner
      clickSignInLink : function() {
        this.expect.element('@signInLink').to.be.present.before(5000);
        return this.click('@signInLink'); 
      },

      // Clicks the Sign Up link at the top right corner
      clickSignUpLink : function() {
        this.expect.element('@signUpLink').to.be.present.before(5000);
        return this.click('@signUpLink');
      },

      //Clicks the New Post link at the top right corner
      clickNewPost : function() {
        return this.waitForElementVisible('@newPostLink', 5000)
                    .click('@newPostLink');
      },

      //Clicks the Settings link at the top right corner
      clickSettings : function() {
        return this.waitForElementVisible('@settingsLink', 5000)
                    .click('@settingsLink');
      },
      
      // Verifies the article feed
      verifyFeed : function() {
        this.waitForElementVisible('@feedContainer', 5000);
        return this.expect.element('@yourFeed').to.be.visible
       }
   }]
  };