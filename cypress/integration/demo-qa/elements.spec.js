import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/CheckBoxPage";
import RadioButtonsPage from "../../pageObjects/RadioButtonsPage";
import WebTablesPage from "../../pageObjects/WebTablesPage";
import ButtonsPage from "../../pageObjects/ButtonsPage";
import LinksPage from "../../pageObjects/LinksPage";
import SelectablePage from "../../pageObjects/SelectablePage";

context("Elements Page", () => {
    context("Text box scenarios", () => {
        beforeEach(() => {
            TextBoxPage.visit();
        });

        it("Filling in Text Boxes", () => {
            // Add scenario stuff here
            // Input info

            TextBoxPage.fullNameInputField.type("George Junior");
            TextBoxPage.emailInputField.type("randomemail@randomdomain.com");
            TextBoxPage.currentAddressInputField.type(
                "Random address in a random place"
            );
            TextBoxPage.permanentAddressInputField.type("A permanent address");
            // Submit
            TextBoxPage.submitButton.click();
            // Validation
            TextBoxPage.paragraphName
                .should("exist")
                .should("be.visible")
                .should("contain", "George Junior");
            TextBoxPage.paragraphEmail.should(
                "contain",
                "randomemail@randomdomain.com"
            );
            TextBoxPage.paragraphCurrentAddress.should(
                "contain",
                "Random address in a random place"
            );
            TextBoxPage.paragraphPermanentAddress.should(
                "contain",
                "A permanent address"
            );
        });

        it("Filling in Text Boxes", () => {
            cy.fixture("textBoxData").then((data) => {
                TextBoxPage.fullNameInputField.type(data.fullName);
                TextBoxPage.emailInputField.type(data.email);
                TextBoxPage.currentAddressInputField.type(data.currentAddress);
                TextBoxPage.permanentAddressInputField.type(data.permanentAddress);
                TextBoxPage.submitButton.click();
                TextBoxPage.paragraphName.should("contain", data.fullName);
                TextBoxPage.paragraphEmail.should("contain", data.email);
                TextBoxPage.paragraphCurrentAddress.should("contain", data.currentAddress);
                TextBoxPage.paragraphPermanentAddress.should("contain", data.permanentAddress);
            });
        });
    });

    context("Check Box scenarios", () => {
        beforeEach(() => {
            CheckBoxPage.visit();
        });

        it("Click checkboxes - Notes And general", () => {
            // Click +/expand
            CheckBoxPage.expandButton.click();
            // Click notes checkbox
            CheckBoxPage.checkBoxTitles.contains('Notes').click();
            // Click general checkbox
            CheckBoxPage.checkBoxTitles.contains('General').click();
            // Validate that you have selected Notes General vai kkā tā
            CheckBoxPage.checkResults
                .should('contain', 'notes')
                .should('contain', 'general');
        });


        it("Click checkboxes - Office", () => {
            // Click +/expand
            CheckBoxPage.expandButton.click();
            // Click notes - office
            CheckBoxPage.checkBoxTitles.contains('Office').click();
            // Validate that you can see all office section elements
            CheckBoxPage.checkResults
                .should('contain', 'office')
                .should('contain', 'public')
                .should('contain', 'private')
                .should('contain', 'classified')
                .should('contain', 'general');
        });
    });

    context("Radio box scenarios", () => {
        beforeEach(() => {
            RadioButtonsPage.visit();
        });

        it("Click Radio Buttons", () => {
            // Click yes
            RadioButtonsPage.yesButton.click({ force: true });;
            // Validate
            RadioButtonsPage.checkResults.should('contain', 'Yes');
            // Click impressive
            RadioButtonsPage.impressiveButton.click({ force: true });;
            // Validate
            RadioButtonsPage.checkResults.should('contain', 'Impressive');
            // disbaled button
            RadioButtonsPage.noButton.should('exist').should("be.disabled");
        });
    });

    context("Web Tables scenarios", () => {
        beforeEach(() => {
            WebTablesPage.visit();
        });

        it("Create user in web table", () => {
            // Click add button
            WebTablesPage.addButton.click();
            // Input needed info
            cy.fixture("formData").then((data) => {
                WebTablesPage.firstNameInputField.type(data.firstName);
                WebTablesPage.lastNameInputField.type(data.lastName);
                WebTablesPage.userEmailInputField.type(data.email);
                WebTablesPage.ageInputField.type(data.age);
                WebTablesPage.salaryInputField.type(data.salary);
                WebTablesPage.departmentInputField.type(data.department);
            });
            // Click submit
            WebTablesPage.submitButton.click();
            // Validate if user exists in list by email
            WebTablesPage.findRow("randomemail@randomdomain.com").should(
                "contain",
                "Junior"
            );

            WebTablesPage.findRow("randomemail@randomdomain.com").should('contain', 'George');
        });

        it("Create user in web table", () => {
            // Deletes user based on email
            // Checks if the user is no longer in the table
            WebTablesPage.deleteUser("cierra@example.com");
            WebTablesPage.rows.should('not.contain', 'cierra@example.com');
            WebTablesPage.deleteUser("alden@example.com");
            WebTablesPage.rows.should('not.contain', 'alden@example.com');
            WebTablesPage.deleteUser("kierra@example.com");
            WebTablesPage.rows.should('not.contain', 'kierra@example.com');
        });
    });

    context("Buttons scenarios", () => {
        beforeEach(() => {
            ButtonsPage.visit();
        });

        it("Click all buttons in different ways", () => {
            // Create elements
            // Click them in meant ways
            ButtonsPage.doubleClickMeButton.dblclick({ force: true });
            ButtonsPage.doubleClickMessage
                .should("be.visible")
                .should('contain', "You have done a double click");
            ButtonsPage.rightClickMeButton.rightclick({ force: true });
            ButtonsPage.rightClickMessage
                .should("be.visible")
                .should('contain', "You have done a right click");
            ButtonsPage.clickMeButton.click({ force: true });
            ButtonsPage.dynamicMessage
                .should("be.visible")
                .should('contain', "You have done a dynamic click");
            // https://docs.cypress.io/api/commands/click
            // Double click, right click
        });
    });

    context("Links scenarios", () => {
        beforeEach(() => {
            LinksPage.visit();
        });

        it("API stuff", () => {
            //cy.intercept("GET", "created", { statusCode: 400 });
            LinksPage.createdLink.click();
            LinksPage.linkResponse.should('contain', '201');
        });
    });

    context("Links scenarios", () => {
        beforeEach(() => {
            SelectablePage.visit();
        });

        it.only("Select click elements", () => {
            // Noklikot uz laukiem “Cras justo odio” un “Morbi leo risus”
            SelectablePage.fieldOne.click();
            SelectablePage.fieldTwo.click();

            SelectablePage.fieldOne.invoke('get', 'active');
            SelectablePage.fieldThree.invoke('get', 'active');

            //SelectablePage.fieldTwo.invoke('show');

            //mt-2 list-group-item list-group-item-action
            //mt-2 list-group-item active list-group-item-action
        });
    });
    context("Grid page scenarios", () => {
        beforeEach(() => {
            SelectablePage.visit();
        });

        it.only("Select click elements", () => {
            // Atver grid daļu
            SelectablePage.gridButton.click();
            // Click fields - Two, Four, Six, Eight
            SelectablePage.fieldButton.contains('Two').click()
                .invoke('attr', 'class')
                .should('contain', 'active');
            SelectablePage.fieldButton.contains('Four').click()
                .invoke('attr', 'class')
                .should('contain', 'active');
            SelectablePage.fieldButton.contains('Six').click()
                .invoke('attr', 'class')
                .should('contain', 'active');
            SelectablePage.fieldButton.contains('Eight').click()
                .invoke('attr', 'class')
                .should('contain', 'active');

            // Check One, Three, Five, Seven, Nine are inactive
            SelectablePage.fieldButton.contains('One')
                .invoke('attr', 'class')
                .should('not.contain', 'active');
            SelectablePage.fieldButton.contains('Three')
                .invoke('attr', 'class')
                .should('not.contain', 'active');
            SelectablePage.fieldButton.contains('Five')
                .invoke('attr', 'class')
                .should('not.contain', 'active');
            SelectablePage.fieldButton.contains('Seven')
                .invoke('attr', 'class')
                .should('not.contain', 'active');
            SelectablePage.fieldButton.contains('Nine')
                .invoke('attr', 'class')
                .should('not.contain', 'active');
        });
    });
});