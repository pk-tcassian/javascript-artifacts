'use strict';

const { client } = require('nightwatch-cucumber');
var { Given, Then, When, defineStep } = require('cucumber');
const And = defineStep;

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