describe("Smoke test", () => {
  it("should visit the index page and the blog page", () => {
    cy.visit("/")
      .get("main")
      .should("exist")
      .contains("✨ See all posts.")
      .find("a")
      .click()
      .get("main")
      .should("exist");
  });
});

export {};
