'use strict';

const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const And = defineStep;

//const {Given, When, Then, defineStep} = require('cucumber');

defineSupportCode(({ Given, When, Then, And }) => {
  Given(/^user is in the home page$/, () => {
    return client
      .url('https://react-redux.realworld.io');
  });

  Given(/^user signs in using (.*?) and (.*?)$/, (emailId, password) => {
    const signInPageObject = client.page.SignInPage();
    return signInPageObject.performSignIn(emailId, password);
  });

  When(/^user clicks on SignIn link$/, () => {
    const homePageObject = client.page.HomePage();
    homePageObject.clickSignInLink();
  });

  When(/^user clicks on SignUp link$/, () => {
    const homePageObject = client.page.HomePage();
    homePageObject.clickSignUpLink();
  });

  Then(/^user should be redirected to the SignUp Page$/, () => {
    const signUpPageObject = client.page.SignUpPage();
    return signUpPageObject.verifySignUp();
  });

  And(/^user enters login details (.*?), (.*?) and (.*?)$/, (userName, emailId, password) => {
    const signUpPageObject = client.page.SignUpPage();
    return signUpPageObject.verifySignUp().enterUserDetails(userName, emailId, password);
  });

  And(/^clicks on SignIn$/, () => {
    const signUpPageObject = client.page.SignUpPage();
    return signUpPageObject.clickSignIn();
  });

  Then(/^the user should be signed up successfully and navigated to the Home Page$/, () => {
    const homePageObject = client.page.HomePage();
    return homePageObject.verifyFeed();
  });

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
});