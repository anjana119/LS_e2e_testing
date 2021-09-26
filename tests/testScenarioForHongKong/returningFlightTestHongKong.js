//  To test this content ->  npm tag test : npm test -- --tag returningFlightTestHongKong

const DefaultConfig = require('../DefaultConfig.json');

module.exports = {
    '@tags': ['returningFlightTestHongKong'],
    'Luxury Escapes Returning Flight Test HongKong'(browser) {

        const luxuryEscapesUrl = DefaultConfig.siteUrlHk;
        const loginSessionHandler = 'button[data-testid="to-login-form"]';
        const userNameField = '#email';
        const passwordField = '#password';
        const loginSubmitButton = 'button[data-testid="to-login-submit"]';
        const ignoreButtonInModel = 'button[data-testid="ignore-geo-redirect-modal"]';
        const selectedDivClass = '.eeqFMb';
        const selectDueDateClass = 'button[data-testid="OfferCalendarDatePickerSelectBox"]';
        const selectDueMonthClass = `button[data-testid="${DefaultConfig.hotelCheckingMonthHk}"]`;
        const selectCheckInDate = `div[data-testid="${DefaultConfig.hotelCheckingDateHk}"]`;
        const selectApplyButton = 'button[data-testid="OfferCalendarApplyBar-button"]';
        const numberOfGuestSelectorButton = 'button[data-testid="OfferCapacitySelect-apply"]';
        const applyBookNowButton = 'button[data-testid="HotelAndFlightsBtn"]';
        const seletDifferentDatesSelecterSection = 'div[data-testid="select-different-dates"]';
        const seletDifferentDatesSelecterBtn = '.sc-siqebx-0[type="button"]';
        const destinationSelecter = '#destination-select';
        const airportSelecter = `span[data-testid="${DefaultConfig.destinationAirPortHk}"]`;
        const modifyDetailsButton = 'button[data-testid="modify-search-button"]';
        const selectDepartureFlightButton = 'button[data-testid="select-flight"]';
        const selectedDepartureFlightContent = 'div[data-testid="itinerary-Depart"]';
        const selectReturningFlightButton = 'button[data-testid="select-flight"]';
        const selectedReturningFlightContent = 'div[data-testid="itinerary-Depart"]';
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
            .click(applyBookNowButton)
            .waitForElementVisible(seletDifferentDatesSelecterSection, 35000)
            .click({selector: seletDifferentDatesSelecterBtn, index: 4})
            .click(destinationSelecter)
            .click(airportSelecter)
            .click(modifyDetailsButton);
        browser.waitForElementPresent(selectDepartureFlightButton, 20000, 'Element ( --- button[data-testid="select-flight"] --- ) is present!');
        browser.click(selectDepartureFlightButton);
        browser.waitForElementPresent(selectedDepartureFlightContent, 20000, 'Element ( --- div[data-testid="itinerary-Depart"] --- ) is present!');
        browser.waitForElementPresent(selectReturningFlightButton, 20000, 'Element ( --- button[data-testid="select-flight"] --- Returning Flight --- ) is present!');
        browser.click(selectReturningFlightButton);
        browser.waitForElementPresent(selectedReturningFlightContent, 20000, 'Element ( --- div[data-testid="itinerary-Depart"] --- Returning Flight Content --- ) is present!');
        browser.saveScreenshot('tests_output/screenshots/hongKong/ReturningFlightTestHongKong.png');
    }
};