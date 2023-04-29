describe("Smoke test", () => {
  it("should visit the index page and the about page", () => {
    cy.visit("/")
      .get("main")
      .should("exist")
      .get('a[href="/about"]')
      .contains(/about me/i)
      .click()
      .get("main")
      .should("exist");
  });
});
