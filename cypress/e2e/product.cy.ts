describe("Home Page Testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/product");
  });
  it("Click Link", () => {
    cy.get("[data-test='link']").eq(0).click()
  });
});