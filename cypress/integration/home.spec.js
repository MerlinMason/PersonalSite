describe("Home", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Should display my name", () => {
        cy.findAllByText("Merlin Mason").should("exist");
    });
});
