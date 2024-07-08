import { testSpinner } from "cypress/support/utils";
import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const projectStatus = ["Critical", "Warning", "Stable"];

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el).contains(projectStatus[index]);
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });

    it("renders error message when data is not available and try again button works", () => {
      const errorMsg = "There was a problem with loading the project data";
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        forceNetworkError: true,
      }).as("getNetworkFailure");

      cy.visit("http://localhost:3000/dashboard");

      cy.wait("@getNetworkFailure");
      cy.get(`[data-cy="error"]`).should("be.visible").contains(errorMsg);

      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        fixture: "projects.json",
      }).as("getProjects");

      cy.get("img[alt='Try again']").click();
      cy.wait(500);

      cy.get(`[data-cy="error"]`).should("not.exist");
      cy.get(`[data-cy="project-list"]`).should("be.visible");
    });
  });

  testSpinner({
    method: "GET",
    apiEndpoint: "https://prolog-api.profy.dev/project",
    pageUrl: "http://localhost:3000/dashboard",
    mockResponse: mockProjects,
    searchElement: "main ul li",
  });
});
