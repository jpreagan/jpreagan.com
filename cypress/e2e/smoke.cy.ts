describe("Smoke test", () => {
  it("should visit the index page and particular blog post", () => {
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
