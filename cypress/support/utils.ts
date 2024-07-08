interface TestSpinnerProps {
  method: "GET" | "POST" | "PUT" | "DELETE";
  apiEndpoint: string;
  pageUrl: string;
  mockResponse: object;
  searchElement: string;
}

export function testSpinner({
  method,
  apiEndpoint,
  pageUrl,
  mockResponse,
  searchElement,
}: TestSpinnerProps) {
  describe("Spinner", () => {
    let sendResponse: (value: unknown | null) => void;
    beforeEach(() => {
      // Create a Promise and capture a reference to its resolve
      // function so that we can resolve it when we want to:
      const trigger = new Promise((resolve) => {
        sendResponse = resolve;
      });

      // setup request mocks
      cy.intercept(method, apiEndpoint, () => {
        return trigger.then(() => {
          return mockResponse;
        });
      });

      // open issues page
      cy.visit(pageUrl);
    });

    afterEach(() => {
      cy.get("#spinner")
        .should("be.visible")
        .then(() => {
          // After we've successfully asserted the loading spinner is
          // visible, call the resolve function of the above Promise
          // to allow the response to the data request to occur...
          sendResponse(null);
          // ...and assert the spinner is removed from the DOM and
          // the data is shown instead.
          cy.get("#spinner").should("not.exist");
          cy.get(searchElement).should("be.visible");
        });
    });
    context("desktop resolution", () => {
      it("renders spinner", () => {
        cy.viewport(64 * 16, 900);
      });
    });

    context("mobile resolution", () => {
      it("renders spinner", () => {
        cy.viewport("iphone-8");
      });
    });
  });
}
