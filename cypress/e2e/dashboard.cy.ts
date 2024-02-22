describe("Dashboard Page Testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });
  context("Side Navigation", () => {
    const sideNav = ["Dashboard", "Customers", "Invoice"];
    it("items", () => {
      sideNav.forEach((value, index) =>
        cy.get("[data-test='side-nav-items']").eq(index).contains(value)
      );
    });
  });
  context("Dasboard Contert", () => {
    it("Judul", () => {
      cy.get("h1").contains("Dasboard");
    });
  });
});
