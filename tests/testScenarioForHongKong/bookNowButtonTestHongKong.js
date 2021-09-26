//  To test this content ->  npm tag test : npm test -- --tag bookNowButtonTestHongKong

const DefaultConfig = require('../DefaultConfig.json');

module.exports = {
    '@tags': ['bookNowButtonTestHongKong'],
    'Luxury Escapes Book Now Button Test HongKong'(browser) {

        const luxuryEscapesUrl = DefaultConfig.siteUrlHk;
        const loginSessionHandler = 'button[data-testid="to-login-form"]';
        const userNameField = '#email';
        const passwordField = '#password';
        const loginSubmitButton = 'button[data-testid="to-login-submit"]';
        const ignoreButtonInModel = 'button[data-testid="ignore-geo-redirect-modal"]';
        const selectedDivClass = '.eeqFMb';
        const selectDueDateClass = 'button[data-testid="OfferCalendarDatePickerSelectBox"]';
        const selectDueMonthClass = `button[data-testid="${DefaultConfig.hotelCheckingMonthHk}"]`;    // Month set to the september but it can be change default json file.
        const selectCheckInDate = `div[data-testid="${DefaultConfig.hotelCheckingDateHk}"]`;
        const selectApplyButton = 'button[data-testid="OfferCalendarApplyBar-button"]';
        const numberOfGuestSelectorButton = 'button[data-testid="OfferCapacitySelect-apply"]';
        const applyBookNowButton = 'button[data-testid="HotelAndFlightsBtn"]';
;
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
            .click(selectDueDateClass)
            .click(selectDueMonthClass)
            .click(selectCheckInDate)
            .click(selectApplyButton)
            .waitForElementVisible(numberOfGuestSelectorButton, 10000)
            .click(numberOfGuestSelectorButton)
            .waitForElementVisible(applyBookNowButton, 30000)
            .click(applyBookNowButton)
            .saveScreenshot('tests_output/screenshots/hongKong/bookNowButtonTestHongKong.png');
    }
};