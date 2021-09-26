//  To test this content ->  npm tag test : npm test -- --tag luxuryEscapesCountryCodeTestHongKong

const DefaultConfig = require('../DefaultConfig.json');

module.exports = {
    '@tags': ['luxuryEscapesCountryCodeTestHongKong'],
    'Luxury Escapes Country Code Test HongKong'(browser) {

        const luxuryEscapesUrl = DefaultConfig.siteUrlHk;
        const logoLinkIsVisible = 'a[data-testid="logo-link"]';
        const loginSessionHandler = 'button[data-testid="to-login-form"]';
        const userNameField = '#email';
        const passwordField = '#password';
        const loginSubmitButton = 'button[data-testid="to-login-submit"]';
        const ignoreButtonInModel = 'button[data-testid="ignore-geo-redirect-modal"]';

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
            .assert.urlContains('hk', 'Url contains country code HK !!');
        browser.saveScreenshot('tests_output/screenshots/hongKong/UrlContainsCountryCodeHongKong.png');
    }
};