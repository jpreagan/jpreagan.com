describe("Smoke test", () => {
  it("should visit the index page and particular blog post", () => {
    cy.visit("/")
      .get("main")
      .should("exist")
      .findByText(/making a create react app template/i)
      .click()
      .get("main")
      .should("exist");
  });
});
