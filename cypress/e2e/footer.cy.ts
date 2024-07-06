import { version } from "../../package.json";

describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("footer", () => {
    it("links are working", () => {
      // check that each link leads to the correct page
      cy.get("footer").contains("Docs").should("have.attr", "href", "/#");

      cy.get("footer").contains("API").should("have.attr", "href", "/#");

      cy.get("footer").contains("Help").should("have.attr", "href", "/#");

      cy.get("footer").contains("Community").should("have.attr", "href", "/#");
    });

    it("has logo", () => {
      cy.get("footer img[src='/icons/logo-small.svg']").should("be.visible");
    });

    it("has correct version", () => {
      cy.get("footer").contains(version);
    });
  });
});
