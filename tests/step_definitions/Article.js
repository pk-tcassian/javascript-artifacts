'use strict';

const { client } = require('nightwatch-cucumber');
var { defineStep, Given, Then, When } = require('cucumber');
const And = defineStep;

When(/^the user navigates to New Post page$/, () => {
  const homePageObject = client.page.HomePage();
  return homePageObject.clickNewPost();
});

And(/^enters (.*?), (.*?), (.*?), (.*?)$/, (articleTitle, articleDescription, articleContent, articleTags) => {
  const newPostPageObject = client.page.NewPostPage();
  return newPostPageObject.enterArticleDetails(articleTitle, articleDescription, articleContent, articleTags);
});

And(/^clicks on Publish Article$/, () => {
  const newPostPageObject = client.page.NewPostPage();
  return newPostPageObject.clickPublishArticle();
});

Then(/^the new article should be created with (.*?) and (.*?)$/, (articleTitle, articleContent) => {
  const articlePageObject = client.page.ArticlePage();
  return articlePageObject.verifyArticleHeading(articleTitle).verifyArticleContent(articleContent);
});
