import { testSpinner } from "cypress/support/utils";
import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  context("desktop resolution", () => {
    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const projectStatus = ["Critical", "Warning", "Stable"];

      // setup request mock
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        fixture: "projects.json",
      }).as("getProjects");

      // open projects page
      cy.visit("http://localhost:3000/dashboard");

      // wait for request to resolve
      cy.wait("@getProjects");
      cy.viewport(1025, 900);

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
      cy.intercept(
        { url: "https://prolog-api.profy.dev/project", times: 4 },
        {
          statusCode: 500,
        },
      );

      cy.visit("http://localhost:3000/dashboard");

      cy.get(`[data-cy="projects-error-message"]`, { timeout: 15000 })
        .should("be.visible")
        .contains(errorMsg)
        .get("button")
        .contains("Try again")
        .click();

      cy.wait(500);

      cy.get(`[data-cy="projects-error-message"]`).should("not.exist");
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
