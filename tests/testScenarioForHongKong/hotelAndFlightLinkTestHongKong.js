//  To test this content ->  npm tag test : npm test -- --tag luxuryEscapesUrlTestHongKong

const DefaultConfig = require('../DefaultConfig.json');

module.exports = {
    '@tags': ['luxuryEscapesUrlTestHongKong'],
    'Luxury Escapes Url Test HongKong'(browser) {

        const luxuryEscapesUrl = DefaultConfig.siteUrlHk;
        const loginSessionHandler = 'button[data-testid="to-login-form"]';
        const userNameField = '#email';
        const passwordField = '#password';
        const loginSubmitButton = 'button[data-testid="to-login-submit"]';
        const ignoreButtonInModel = 'button[data-testid="ignore-geo-redirect-modal"]';
        const selectedDivClass = '.eeqFMb';

        browser
            .url(luxuryEscapesUrl)
            .waitForElementVisible(loginSessionHandler, 30000)
            .click(loginSessionHandler)
            .waitForElementVisible(userNameField, 15000)
            .setValue(userNameField, DefaultConfig.loginUserName)
            .waitForElementVisible(passwordField, 15000)
            .setValue(passwordField, DefaultConfig.loginPassword)
            .click(loginSubmitButton)
            .waitForElementVisible(ignoreButtonInModel, 30000)
            .click(ignoreButtonInModel)
            .waitForElementVisible(selectedDivClass, 30000);
        browser
            .click(selectedDivClass)
            .assert.urlContains('hotel-reservation', 'Url contains:- hotel-reservation parameter !')
            .saveScreenshot('tests_output/screenshots/hongKong/HotelReservationPageHongKong.png');
    }
};