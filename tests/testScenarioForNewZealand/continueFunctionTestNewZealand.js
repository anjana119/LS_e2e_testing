//  To test this content ->  npm tag test : npm test -- --tag continueFunctionTestNewZealand

const DefaultConfig = require('../DefaultConfig.json');

module.exports = {
    '@tags': ['continueFunctionTestNewZealand'],
    'Luxury Escapes Returning Flight Test NewZealand'(browser) {

        const luxuryEscapesUrl = DefaultConfig.siteUrlNz;
        const logoLinkIsVisible = 'a[data-testid="logo-link"]';
        const loginSessionHandler = 'button[data-testid="to-login-form"]';
        const userNameField = '#email';
        const passwordField = '#password';
        const loginSubmitButton = 'button[data-testid="to-login-submit"]';
        const ignoreButtonInModel = 'button[data-testid="ignore-geo-redirect-modal"]';
        const selectedDivClass = 'div[data-testid="flights-pricing"]';
        const selectDueDateClass = 'button[data-testid="OfferCalendarDatePickerSelectBox"]';
        const selectDueMonthClass = `button[data-testid="${DefaultConfig.hotelCheckingMonthNz}"]`;
        const selectCheckInDate = `div[data-testid="${DefaultConfig.hotelCheckingDateNz}"]`;
        const selectApplyButton = 'button[data-testid="OfferCalendarApplyBar-button"]';
        const selectDepartureAirPort = 'button[data-testid="origin-select"]';
        const selectDepartureAirPortMenuItems = `button[data-testid="${DefaultConfig.departureAirPortNz}"]`;
        const applySubmitSelectorButton = 'button[data-testid="OfferAirportSelect-apply"]';
        const applyBookNowButton = 'button[data-testid="HotelAndFlightsBtn"]';
        const changeDetailsSelecter = '.ghRbjW';
        const destinationSelecter = '#destination-select';
        const airportSelecter = `span[data-testid="${DefaultConfig.destinationAirPortNz}"]`;
        const applySelectModify = 'button[data-testid="modify-search-button"]';
        const selectFlightCategory = '.carousel-slide';
        const selectDepartureFlightButton = '.bEwtxH';
        const selectedDepartureFlightContent = 'div[data-testid="itinerary-Depart"]';
        const selectReturningFlightButton = 'button[data-testid="select-flight"]';
        const selectedReturningFlightContent = 'div[data-testid="itinerary-Depart"]';
        const continueButtonClass = 'button[data-testid="go-to-payment"]';
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
            .click({ selector: selectDueMonthClass, index: DefaultConfig.hotelCheckingMonthIndexNz })
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
                    .click({ selector: selectFlightCategory, index: DefaultConfig.indexOfCategoryNz })
                    .pause(5000);
                browser.click({ selector: selectDepartureFlightButton, index: DefaultConfig.departureFlightIndexNz });
                browser
                    .waitForElementPresent(selectedDepartureFlightContent, 20000, 'Element ( --- div[data-testid="itinerary-Depart"] --- ) is present!')
                    .pause(5000);
                browser.waitForElementPresent(selectReturningFlightButton, 20000, 'Element ( --- button[data-testid="select-flight"] --- Returning Flight --- ) is present!');
                browser.click(selectReturningFlightButton);
                browser
                    .waitForElementPresent(selectedReturningFlightContent, 20000, 'Element ( --- div[data-testid="itinerary-Depart"] --- Returning Flight Content --- ) is present!')
                    .pause(5000)
                    .click(continueButtonClass)
                    .pause(5000);
            } else if (result.status != -1) {
                console.log('The flight type => JETSTAR does not exist to complete test ...');
                browser.end();
            }
        });
        browser.saveScreenshot('tests_output/screenshots/newZealand/ReviewAndPaymentPageNewZealand.png');
    }
};