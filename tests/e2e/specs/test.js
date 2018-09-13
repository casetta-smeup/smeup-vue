// https://docs.cypress.io/api/introduction/api.html

describe("Test matrix", () => {
  it("table head should have 8 columns", () => {
    cy.visit("/");

    cy.get(".MAT table thead tr th").should("have.length", 8);
  });
});
