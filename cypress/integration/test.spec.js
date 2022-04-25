/// <reference types="cypress" />

describe("testSuiteLocal", () => {
  it("testScenarioLocal", () => {
    cy.visit("index.html");
    //Questions
    cy.get("[data-cy=qOne]").should("be.visible");
    cy.get("[data-cy=qTwo]").should("be.visible");
    //ReponseQuestion1
    cy.get("[data-cy=R1Q1]").should("be.visible");
    cy.get("[data-cy=R2Q1]").should("be.visible");
    cy.get("[data-cy=R3Q1]").should("be.visible");
    //ReponseQuestion2
    cy.get("[data-cy=R1Q2]").should("be.visible");
    cy.get("[data-cy=R2Q2]").should("be.visible");
    cy.get("[data-cy=R3Q2]").should("be.visible");
    cy.get("[data-cy=R4Q2]").should("be.visible");
  });
});
