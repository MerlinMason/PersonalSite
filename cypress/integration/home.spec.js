describe("Home", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Should display my name", () => {
        cy.findByText("I'm Merlin (he/him)").should("exist");
    });
});
