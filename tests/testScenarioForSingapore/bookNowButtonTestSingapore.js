//  To test this content ->  npm tag test : npm test -- --tag bookNowButtonTestSingapore

const DefaultConfig = require('../DefaultConfig.json');

module.exports = {
    '@tags': ['bookNowButtonTestSingapore'],
    'Luxury Escapes Book Now Button Test Singapore'(browser) {

        const luxuryEscapesUrl = DefaultConfig.siteUrlSg;
        const logoLinkIsVisible = 'a[data-testid="logo-link"]';
        const loginSessionHandler = 'button[data-testid="to-login-form"]';
        const userNameField = '#email';
        const passwordField = '#password';
        const loginSubmitButton = 'button[data-testid="to-login-submit"]';
        const ignoreButtonInModel = 'button[data-testid="ignore-geo-redirect-modal"]';
        const selectedDivClass = 'div[data-testid="OfferInfoBar"]';
        const selectDueDateClass = 'button[data-testid="OfferCalendarDatePickerSelectBox"]';
        const selectDueMonthClass = `button[data-testid="${DefaultConfig.hotelCheckingMonthSg}"]`;
        const selectCheckInDate = `div[data-testid="${DefaultConfig.hotelCheckingDateSg}"]`;
        const selectApplyButton = 'button[data-testid="OfferCalendarApplyBar-button"]';
        const numberOfGuestSelectorButton = 'button[data-testid="OfferCapacitySelect-apply"]';
        const applyBookNowButton = 'button[data-testid="HotelAndFlightsBtn"]';
;
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
            .waitForElementVisible(selectedDivClass, 35000);
        browser
            .click(selectedDivClass)
            .click(selectDueDateClass)
            .click({ selector: selectDueMonthClass, index: DefaultConfig.hotelCheckingMonthIndexSg })
            .click(selectCheckInDate)
            .pause(1500)
            .click(selectApplyButton)
            .waitForElementVisible(numberOfGuestSelectorButton, 5000)
            .click(numberOfGuestSelectorButton)
            .click(applyBookNowButton)
            .pause(8000)
            .saveScreenshot('tests_output/screenshots/singapore/bookNowButtonTestSingapore.png');
    }
};