import BasePage from "./BasePage";

class RadioButtonsPage extends BasePage {
    static get url() {
        return "/radio-button";
    }

    static get exampleElement() {
        return cy.get("exampleSelector");
    }

    static get yesButton() {
        return cy.get("#yesRadio");
    }

    static get impressiveButton() {
        return cy.get("#impressiveRadio");
    }

    static get noButton() {
        return cy.get("#noRadio");
    }

    static get checkResults() {
        return cy.get(".text-success");
    }
}

export default RadioButtonsPage;