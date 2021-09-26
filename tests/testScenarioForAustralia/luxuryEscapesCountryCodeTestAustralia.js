//  To test this content ->  npm tag test : npm test -- --tag luxuryEscapesCountryCodeTestAustralia

const DefaultConfig = require('../DefaultConfig.json');

module.exports = {
    '@tags': ['luxuryEscapesCountryCodeTestAustralia'],
    'Luxury Escapes Country Code Test Australia'(browser) {

        const luxuryEscapesUrl = DefaultConfig.siteUrlAu;
        const logoLinkIsVisible = 'a[data-testid="logo-link"]';
        const loginSessionHandler = 'button[data-testid="to-login-form"]';
        const userNameField = '#email';
        const passwordField = '#password';
        const loginSubmitButton = 'button[data-testid="to-login-submit"]';

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
            .assert.urlContains('au', 'Url contains country code AU !!');
        browser.saveScreenshot('tests_output/screenshots/australia/UrlContainsCountryCodeAustralia.png');
    }
};