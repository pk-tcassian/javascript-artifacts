'use strict';

const { client } = require('nightwatch-cucumber');
var { Given, Then, When, defineStep } = require('cucumber');
const And = defineStep;

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