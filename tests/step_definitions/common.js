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