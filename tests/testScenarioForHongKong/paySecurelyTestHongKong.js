//  To test this content ->  npm tag test : npm test -- --tag paySecurelyTestHongKong

const DefaultConfig = require('../DefaultConfig.json');

module.exports = {
    '@tags': ['paySecurelyTestHongKong'],
    'Luxury Escapes Pay Securely Test HongKong'(browser) {

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
        const continueButtonClass = 'button[data-testid="go-to-payment"]';

        // ------------ identify the input fields and set values Traveller 1 ------------
        const titleSelectorTraveller1 = 'select[data-testid="title-0"]';
        const firstNameFieldTraveller1 = 'input[data-testid="firstName-0"]';
        const middleNameFieldTraveller1 = 'input[data-testid="middleName-0"]';
        const lastNameFieldTraveller1 = 'input[data-testid="lastName-0"]';
        const gmailFieldTraveller1 = 'input[data-testid="passenger-email-0"]';
        const dateOfBirthFieldTraveller1 = 'input[data-testid="birthDate-0"]';
        const mobileNoInputFieldTraveller1 = 'input[data-testid="passenger-phone-0"]';

        // ------------ identify the input fields and set values Traveller 2 ------------
        const firstNameFieldTraveller2 = 'input[data-testid="firstName-1"]';
        const middleNameFieldTraveller2 = 'input[data-testid="middleName-1"]';
        const lastNameFieldTraveller2 = 'input[data-testid="lastName-1"]';
        const dateOfBirthFieldTraveller2 = 'input[data-testid="birthDate-1"]';

        // ------------ identify the input fields and set values to Agrement Details ------------
        const agreeToFareRules = 'div[data-testid="fare-rules-agree-checkbox"]';
        const agreeToTermsAndConditions = 'div[data-testid="terms-and-privacy-agree-checkbox"]';

        const creditCardTabMenu = 'button[data-testid="stripe-accordion-toggle"]';

        // ------------ identify the input fields and set values Payments Details ------------
        const fullNameFieldPaymentsDetails = '#ccname';
        const cardNumberFieldPaymentsDetails = 'input[aria-label="Credit or debit card number"]';
        const cardExpireDateFieldPaymentsDetails = 'input[aria-label="Credit or debit card expiration date"]';
        const cardCvvFieldPaymentsDetails = 'input[aria-label="Credit or debit card CVC/CVV"]';

        const saveCardDetailsFieldPaymentsDetails = 'div[data-testid="save-card"]';

        const paySecurelyNowButton = 'button[data-testid="pay-now"]';

        // ------------ identify Confirm Traveler Details ------------
        // const confirmTravelerDetailsButton = '.sc-1y6ir9l-0 fdSba sc-omw30o-3 hccllZ';
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
            .waitForElementVisible(selectedDivClass, 35000);
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
        browser.waitForElementPresent(selectDepartureFlightButton, 20000, 'Element ( --- button[data-testid="select-flight"] --- Departure Flight --- ) is present!');
        browser.click(selectDepartureFlightButton);
        browser.waitForElementPresent(selectedDepartureFlightContent, 20000, 'Element ( --- div[data-testid="itinerary-Depart"] --- Departure Flight Content --- ) is present!');
        browser.waitForElementPresent(selectReturningFlightButton, 20000, 'Element ( --- button[data-testid="select-flight"] --- Returning Flight --- ) is present!');
        browser.click(selectReturningFlightButton);
        browser.waitForElementPresent(selectedReturningFlightContent, 20000, 'Element ( --- div[data-testid="itinerary-Depart"] --- Returning Flight Content --- ) is present!');
        browser.click(continueButtonClass);
        browser.waitForElementPresent(titleSelectorTraveller1, 30000, 'Element ( --- select[data-testid="title-0"] --- Title Traveller --- ) is present!');
        browser
            // ------------ set values to the particular fields Traveller 1 ------------
            .click('select[data-testid="title-0"] option[value="mr"]')
            .setValue(firstNameFieldTraveller1, DefaultConfig.first_Name_Traveller_1)
            .setValue(middleNameFieldTraveller1, DefaultConfig.middle_Name_Traveller_1)
            .setValue(lastNameFieldTraveller1, DefaultConfig.last_Name_Traveller_1)
            .setValue(gmailFieldTraveller1, DefaultConfig.email_Address_Traveller_1)
            .setValue(dateOfBirthFieldTraveller1, DefaultConfig.dob_Traveller_1)
            .setValue(mobileNoInputFieldTraveller1, DefaultConfig.mobile_Traveller_1)

            // ------------ set values to the particular fields Traveller 2 ------------
            .click('select[data-testid="title-1"] option[value="mr"]')
            .setValue(firstNameFieldTraveller2, DefaultConfig.first_Name_Traveller_2)
            .setValue(middleNameFieldTraveller2, DefaultConfig.middle_Name_Traveller_2)
            .setValue(lastNameFieldTraveller2, DefaultConfig.last_Name_Traveller_2)
            .setValue(dateOfBirthFieldTraveller2, DefaultConfig.dob_Traveller_2)

            // ------------ set values to the particular fields Agrement Details ------------
            .click(agreeToFareRules)
            .click(agreeToTermsAndConditions)

            // ------------ set values to the particular fields Traveller 2 ------------
            .waitForElementVisible(creditCardTabMenu, 5000)
            .click(creditCardTabMenu)
            .setValue(fullNameFieldPaymentsDetails, DefaultConfig.card_Ownre_Name)

            // Identify stripe iframe layout
            .waitForElementVisible('.ciETSK', 2000)
            // Stripe card
            .waitForElementPresent('.__PrivateStripeElement iframe', 10000)
            .element('css selector', '.__PrivateStripeElement iframe', el => {
                browser
                    .frame(el.value)
                    .waitForElementPresent(cardNumberFieldPaymentsDetails, 1000)
                    .setValue(cardNumberFieldPaymentsDetails, '')
                    .keys(['4']).pause(100).keys(['2']).pause(100).keys(['4']).pause(100).keys(['2']).pause(500)
                    .keys(['4']).pause(100).keys(['2']).pause(100).keys(['4']).pause(100).keys(['2']).pause(500)
                    .keys(['4']).pause(100).keys(['2']).pause(100).keys(['4']).pause(100).keys(['2']).pause(500)
                    .keys(['4']).pause(100).keys(['2']).pause(100).keys(['4']).pause(100).keys(['2'])
                    .assert.value(cardNumberFieldPaymentsDetails, DefaultConfig.card_Number)
                    .frame(null);
            })

            // Stripe expiration date
            .waitForElementPresent('.__PrivateStripeElement iframe', 10000)
            .element('css selector', '.__PrivateStripeElement iframe', el => {
                browser
                    .frame(el.value)
                    .waitForElementPresent(cardExpireDateFieldPaymentsDetails, 1000)
                    .setValue(cardExpireDateFieldPaymentsDetails, '')
                    .keys(['0']).pause(100).keys(['3']).pause(100).keys(['2']).pause(100).keys(['9'])
                    .assert.value(cardExpireDateFieldPaymentsDetails, DefaultConfig.card_Ex_Date)
                    .frame(null);
            })

            // Stripe expiration cvc
            .waitForElementPresent('.__PrivateStripeElement iframe', 10000)
            .element('css selector', '.__PrivateStripeElement iframe', el => {
                browser
                    .frame(el.value)
                    .waitForElementPresent(cardCvvFieldPaymentsDetails, 1000)
                    .setValue(cardCvvFieldPaymentsDetails, '')
                    .keys(['1']).pause(100).keys(['2']).pause(100).keys(['3'])
                    .assert.value(cardCvvFieldPaymentsDetails, DefaultConfig.card_CVV)
                    .frame(null);
            })

            .click(saveCardDetailsFieldPaymentsDetails)
            .click(paySecurelyNowButton);

            // ------------ click confirm traveler details ------------cardExpireDateMainProperty
            // .click(confirmTravelerDetailsButton);
        browser.saveScreenshot('tests_output/screenshots/hongKong/PaySecurelyTestHongKong.png');
    }
};