// https://docs.cypress.io/api/introduction/api.html

describe('Expect a table on the home page', () => {
  it('Visits the app root url and expects to find a table', () => {
    cy.visit('http://localhost:8080/');
    cy.get('table').should('be.visible');
  });
});
