describe("Home Page Testing", () => {
  beforeEach(()=>{
    cy.visit("http://localhost:3000")
  })
  context("Heading", () => {
    it("Menampilkan h1", () => {
      cy.get("[data-test='hero-title']").contains('Home Page')
    });
  });
  context("Subtitle", () => {
    it("Menampilkan p", () => {
      cy.get("p").contains('Lorem ipsum dolor sit amet consectet')
    });
  });
});
