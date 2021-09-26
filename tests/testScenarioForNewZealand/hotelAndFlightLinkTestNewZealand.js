//  To test this content ->  npm tag test : npm test -- --tag luxuryEscapesUrlTestNewZealand

const DefaultConfig = require('../DefaultConfig.json');

module.exports = {
    '@tags': ['luxuryEscapesUrlTestNewZealand'],
    'Luxury Escapes Url Test NewZealand'(browser) {

        const luxuryEscapesUrl = DefaultConfig.siteUrlNz;
        const logoLinkIsVisible = 'a[data-testid="logo-link"]';
        const loginSessionHandler = 'button[data-testid="to-login-form"]';
        const userNameField = '#email';
        const passwordField = '#password';
        const loginSubmitButton = 'button[data-testid="to-login-submit"]';
        const ignoreButtonInModel = 'button[data-testid="ignore-geo-redirect-modal"]';
        const selectedDivClass = 'div[data-testid="flights-pricing"]';

        browser
            .url(luxuryEscapesUrl)
            .waitForElementVisible(logoLinkIsVisible, 30000)
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
            .saveScreenshot('tests_output/screenshots/newZealand/HotelReservationPageNewZealand.png');
    }
};