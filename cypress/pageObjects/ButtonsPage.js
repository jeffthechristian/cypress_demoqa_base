import BasePage from "./BasePage";

class ButtonsPage extends BasePage {
    static get url() {
        return "/buttons";
    }

    static get exampleElement() {
        return cy.get("exampleSelector");
    }

    static get doubleClickMeButton() {
        return cy.get("#doubleClickBtn");
    }

    static get doubleClickMessage() {
        return cy.get("#doubleClickMessage");
    }

    static get rightClickMeButton() {
        return cy.get("#rightClickBtn");
    }

    static get rightClickMessage() {
        return cy.get("#rightClickMessage");
    }

    static get clickMeButton() {
        return cy.get(".btn-primary").contains(/^Click Me/);
    }

    static get dynamicMessage() {
        return cy.get("#dynamicClickMessage");
    }

}

export default ButtonsPage;