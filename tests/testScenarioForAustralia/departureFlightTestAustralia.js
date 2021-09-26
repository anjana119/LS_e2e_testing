//  To test this content ->  npm tag test : npm test -- --tag departureFlightTestAustralia

const DefaultConfig = require('../DefaultConfig.json');

module.exports = {
    '@tags': ['departureFlightTestAustralia'],
    'Luxury Escapes Departure Flight Test Australia'(browser) {

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
        const changeDetailsSelecter = '.ghRbjW';
        const destinationSelecter = '#destination-select';
        const airportSelecter = `span[data-testid="${DefaultConfig.destinationAirPortAu}"]`;
        const applySelectModify = 'button[data-testid="modify-search-button"]';
        const selectFlightCategory = '.carousel-slide';
        const selectDepartureFlightButton = '.bEwtxH';
        const selectedDepartureFlightContent = 'div[data-testid="itinerary-Depart"]';
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
            .click({selector: selectDueMonthClass, index: DefaultConfig.indexOfSelectDueMonthAu})
            .click(selectCheckInDate)
            .pause(1500)
            .click(selectApplyButton)
            .click(selectDepartureAirPort)
            .click(selectDepartureAirPortMenuItems)
            .click(applySubmitSelectorButton)
            .click(applyBookNowButton);
        browser.waitForElementPresent(changeDetailsSelecter, 50000, 'Element ( --- .ghRbjW --- ) is present!');
        browser.click(changeDetailsSelecter);
        browser
            .click(destinationSelecter)
            .click(airportSelecter)
            .click(applySelectModify)
            .pause(8000);
        browser.element('css selector', selectFlightCategory, function (result) {
            if (result.status === -1) {
                browser
                    .waitForElementPresent(selectFlightCategory, 30000, 'Element ( --- .carousel-slide --- ) is present!')
                    .click({selector: selectFlightCategory, index: DefaultConfig.indexOfCategoryAu})
                    .pause(5000);
                browser.click({selector: selectDepartureFlightButton, index: DefaultConfig.departureFlightIndexAu});
                browser
                    .waitForElementPresent(selectedDepartureFlightContent, 20000, 'Element ( --- div[data-testid="itinerary-Depart"] --- ) is present!')
                    .pause(5000);   
            } else if (result.status != -1) {
                console.log('The flight type => REX does not exist to complete test ...');
                browser.end();
            }
        });
        browser.saveScreenshot('tests_output/screenshots/australia/DepartureFlightTestAustralia.png');
    }
};