//  To test this content ->  npm tag test : npm test -- --tag bookNowButtonTestUnitedStates

const DefaultConfig = require('../DefaultConfig.json');

module.exports = {
    '@tags': ['bookNowButtonTestUnitedStates'],
    'Luxury Escapes Book Now Button Test UnitedStates'(browser) {

        const luxuryEscapesUrl = DefaultConfig.siteUrlUs;
        const logoLinkIsVisible = 'a[data-testid="logo-link"]';
        const loginSessionHandler = 'button[data-testid="to-login-form"]';
        const userNameField = '#email';
        const passwordField = '#password';
        const loginSubmitButton = 'button[data-testid="to-login-submit"]';
        const ignoreButtonInModel = 'button[data-testid="ignore-geo-redirect-modal"]';
        const selectedDivClass = 'div[data-testid="OfferInfoBar"]';
        const selectDueDateClass = 'button[data-testid="OfferCalendarDatePickerSelectBox"]';
        const selectDueMonthClass = `button[data-testid="${DefaultConfig.hotelCheckingMonthUs}"]`;
        const selectCheckInDate = `div[data-testid="${DefaultConfig.hotelCheckingDateUs}"]`;
        const selectApplyButton = 'button[data-testid="OfferCalendarApplyBar-button"]';
        const numberOfGuestSelectorBtn = 'button[data-testid="OfferCapacitySelect-apply"]';
        const selectDepartureAirPort = 'button[data-testid="origin-select"]';
        const selectDepartureAirPortMenuItems = `button[data-testid="${DefaultConfig.departureAirPortUs}"]`;
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
            .waitForElementVisible(ignoreButtonInModel, 30000)
            .click(ignoreButtonInModel)
            .waitForElementVisible(selectedDivClass, 35000);
        browser
            .click(selectedDivClass)
            .click(selectDueDateClass)
            .click({ selector: selectDueMonthClass, index: DefaultConfig.hotelCheckingMonthIndexUs })
            .click(selectCheckInDate)
            .pause(1500)
            .click(selectApplyButton)
            .waitForElementVisible(numberOfGuestSelectorBtn, 15000)
            .click(numberOfGuestSelectorBtn)
            .click(selectDepartureAirPort)
            .click(selectDepartureAirPortMenuItems)
            .click(applySubmitSelectorButton)
            .click(applyBookNowButton)
            .pause(8000)
            .saveScreenshot('tests_output/screenshots/unitedStates/bookNowButtonTestUnitedStates.png');
    }
};