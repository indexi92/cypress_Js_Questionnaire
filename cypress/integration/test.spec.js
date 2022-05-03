/// <reference types="cypress" />

describe("Q&RVisible", () => {
  it("testQ&RVisible", () => {
    cy.visit("/");
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

describe("bonneRep", () => {
  it("testbonneRep", () => {
    cy.visit("/");
    cy.get("[data-cy=R1Q1]").check();
    cy.get("#responseOneQ1").should("contain.text", "Staline");
    cy.get("[data-cy=R1Q2]").check();
    cy.get("#responseOneQ2").should("contain.text", "Jordan");
    cy.get("[data-cy=R4Q2]").check();
    cy.get("#responseForQ2").should("contain.text", "Pippen");
    cy.get("[data-cy=validbtn]").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contain("Mauvaise Reponse");
    });
  });
});

describe("mauvaiseRep", () => {
  it("testmauvaiseRep", () => {
    cy.visit("index.html");
    cy.get("[data-cy=R3Q1]").check();
    cy.get("[data-cy=R2Q2]").check();
    cy.get("[data-cy=R4Q2]").check();
    cy.get("[data-cy=validbtn]").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contain("Mauvaise Reponse");
    });
  });
});
