//  To test this content ->  npm tag test : npm test -- --tag paySecurelyTestSingapore

const DefaultConfig = require('../DefaultConfig.json');

module.exports = {
    '@tags': ['paySecurelyTestSingapore'],
    'Luxury Escapes Pay Securely Test Singapore'(browser) {

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
        const changeDetailsSelecter = '.ghRbjW';
        const destinationSelecter = '#destination-select';
        const airportSelecter = `span[data-testid="${DefaultConfig.destinationAirPortSg}"]`;
        const applySelectModify = 'button[data-testid="modify-search-button"]';
        const selectFlightCategory = '.carousel-slide';
        const selectDepartureFlightButton = '.bEwtxH';
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

        // ------------ identify the input fields and set values to Insurance Cover ------------
        const insuranceCoverButtonSelector = 'button[data-testid="insurance-no-insurance"]';

        // ------------ identify the input fields and set values to Agrement Details ------------
        const agreeToFareRules = '.jYZLE';
        const agreeToTermsAndConditions = '.jYZLE';

        const creditCardTabMenu = 'button[data-testid="stripe-accordion-toggle"]';

        // ------------ identify the input fields and set values Payments Details ------------
        const fullNameFieldPaymentsDetails = '#ccname';
        const cardNumberFieldPaymentsDetails = 'input[aria-label="Credit or debit card number"]';
        const cardExpireDateFieldPaymentsDetails = 'input[aria-label="Credit or debit card expiration date"]';
        const cardCvvFieldPaymentsDetails = 'input[aria-label="Credit or debit card CVC/CVV"]';

        const saveCardDetailsFieldPaymentsDetails = '.bcxjWg';

        const paySecurelyNowButton = 'button[data-testid="pay-now"]';
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
                    .click({ selector: selectFlightCategory, index: DefaultConfig.indexOfCategorySg })
                    .pause(5500);
                browser.click({ selector: selectDepartureFlightButton, index: DefaultConfig.departureFlightIndexSg });
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
                    .click('select[data-testid="title-1"] option[value="ms"]')
                    .setValue(firstNameFieldTraveller2, DefaultConfig.first_Name_Traveller_2)
                    .setValue(middleNameFieldTraveller2, DefaultConfig.middle_Name_Traveller_2)
                    .setValue(lastNameFieldTraveller2, DefaultConfig.last_Name_Traveller_2)
                    .setValue(dateOfBirthFieldTraveller2, DefaultConfig.dob_Traveller_2)

                    // ------------ set values to the particular fields Insurance Cover ------------
                    .click(insuranceCoverButtonSelector)

                    // ------------ set values to the particular fields Agrement Details ------------
                    .click({ selector: agreeToFareRules, index: 0 })
                    .click({ selector: agreeToTermsAndConditions, index: 1 })

                    // ------------ set values to the particular fields Traveller 2 ------------
                    .waitForElementVisible(creditCardTabMenu, 5000)
                    .click(creditCardTabMenu)
                    .waitForElementVisible(fullNameFieldPaymentsDetails, 10000)
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

                    .click({ selector: saveCardDetailsFieldPaymentsDetails, index: 2 })
                    .pause(5500);

                browser.click(paySecurelyNowButton);
            } else if (result.status != -1) {
                console.log('The flight type => SCOOT does not exist to complete test ...');
                browser.end();
            }
        });
        browser.saveScreenshot('tests_output/screenshots/singapore/PaySecurelyTestSingapore.png');
    }
};