'use strict';

var expect = require('chai').expect;

module.exports = {
    elements: {
      articleTitle :{
        selector : "input[placeholder='Article Title']"
      },
      articleDescription :{
        selector : 'input[placeholder="What\'s this article about?"]'
      },
      articleContent :{
        selector : "textarea[placeholder*='Write your article']"
      },
      articleTags :{
        selector : "input[placeholder='Enter tags'] div"
      },
      publishBtn :{
        selector : "//button[contains(text(), 'Publish')]",
        locateStrategy: 'xpath'
      }
    },

    commands : [{
      //Enter details of the new article
      enterArticleDetails : function (articleTitle, articleDescription, articleContent, articleTags) {
        return this.waitForElementVisible('@publishBtn', 5000)
          .setValue('@articleTitle', articleTitle)
          .setValue('@articleDescription', articleDescription)
          .setValue('@articleContent', articleContent);
//          .setValue('@articleTags', articleTags);
      },
      
      //Publishes the new article
      clickPublishArticle : function () {
        return this.click('@publishBtn');
      }           
    }]
  };