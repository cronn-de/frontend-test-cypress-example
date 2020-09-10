import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("we navigate to the landing page", () => {
  cy.visit("http://www.cronn.de/");
});

Then("the company slogan can be seen", () => {
  cy.contains("wir entwickeln software").should('be.visible');
});

Then("the page title is correct", () => {
  cy.title().should('eq', "cronn GmbH - wir entwickeln software_")
});

Given("the cookie warning can be seen", () => {
  cy.contains("Akzeptieren").should('be.visible');
});

When("we accept cookies", () => {
  cy.contains("Akzeptieren").click();
});

Then("the cookie warning cannot be seen anymore", () => {
  cy.contains("Akzeptieren").should('not.be.visible');
});
