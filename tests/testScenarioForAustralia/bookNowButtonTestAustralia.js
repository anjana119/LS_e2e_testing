//  To test this content ->  npm tag test : npm test -- --tag bookNowButtonTestAustralia

const DefaultConfig = require('../DefaultConfig.json');

module.exports = {
    '@tags': ['bookNowButtonTestAustralia'],
    'Luxury Escapes Book Now Button Test Australia'(browser) {

        const luxuryEscapesUrl = DefaultConfig.siteUrlAu;
        const logoLinkIsVisible = 'a[data-testid="logo-link"]';
        const loginSessionHandler = 'button[data-testid="to-login-form"]';
        const userNameField = '#email';
        const passwordField = '#password';
        const loginSubmitButton = 'button[data-testid="to-login-submit"]';
        const selectedDivClass = 'div[data-testid="flights-pricing"]';
        const selectDueDateClass = 'button[data-testid="OfferCalendarDatePickerSelectBox"]';
        const selectDueMonthClass = `button[data-testid="${DefaultConfig.hotelCheckingMonthAu}"]`;
        const selectCheckInDate = `div[data-testid="${DefaultConfig.hotelCheckingDateAu}"]`;
        const selectApplyButton = 'button[data-testid="OfferCalendarApplyBar-button"]';
        const selectDepartureAirPort = 'button[data-testid="origin-select"]';
        const selectDepartureAirPortMenuItems = `button[data-testid="${DefaultConfig.departureAirPortAu}"]`;
        const applySubmitSelectorButton = 'button[data-testid="OfferAirportSelect-apply"]';
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
            .waitForElementVisible(selectedDivClass, 35000);
        browser
            .click(selectedDivClass)
            .click(selectDueDateClass)
            .click(selectDueMonthClass)
            .click(selectCheckInDate)
            .pause(1500)
            .click(selectApplyButton)
            .click(selectDepartureAirPort)
            .click(selectDepartureAirPortMenuItems)
            .click(applySubmitSelectorButton)
            .click(applyBookNowButton)
            .pause(8000)
            .saveScreenshot('tests_output/screenshots/australia/bookNowButtonTestAustralia.png');
    }
};