import BasePage from "./BasePage";

class SelectablePage extends BasePage {
    static get url() {
        return "/selectable";
    }

    static get exampleElement() {
        return cy.get("exampleSelector");
    }

    static get fieldOne() {
        return cy.get(".mt-2").contains("Cras justo odio");
    }

    static get fieldTwo() {
        return cy.get(".mt-2").contains("Dapibus ac facilisis in");
    }

    static get fieldThree() {
        return cy.get(".mt-2").contains("Morbi leo risus");
    }

    static get fieldFour() {
        return cy.get(".mt-2").contains("Porta ac consectetur ac");
    }

    static get gridButton() {
        return cy.get("#demo-tab-grid");
    }

    static get fieldButton() {
        return cy.get('li');
    }
}

export default SelectablePage;