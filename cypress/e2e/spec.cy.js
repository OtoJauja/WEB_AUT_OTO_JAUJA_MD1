

describe('Selectable Grid Test', () => {
  it('should select specific numbers in the grid', () => {
    cy.visit('https://demoqa.com/selectable');
    
    // Click "Grid" tab
    cy.contains('Grid').click();
    
    // Click specific numbers - Two, Four, Six, Eight
    cy.get('#gridContainer > :nth-child(2)').click();
    cy.get('#gridContainer > :nth-child(4)').click();
    cy.get('#gridContainer > :nth-child(6)').click();
    cy.get('#gridContainer > :nth-child(8)').click();
    
    // Validate that selected numbers are highlighted
    cy.get('.ui-selected').should('have.length', 4);
    cy.contains('Two').should('have.class', 'ui-selected');
    cy.contains('Four').should('have.class', 'ui-selected');
    cy.contains('Six').should('have.class', 'ui-selected');
    cy.contains('Eight').should('have.class', 'ui-selected');
    
    // Validate that unselected numbers are not highlighted
    cy.get('.ui-selected').should('not.contain', 'One');
    cy.get('.ui-selected').should('not.contain', 'Three');
    cy.get('.ui-selected').should('not.contain', 'Five');
    cy.get('.ui-selected').should('not.contain', 'Seven');
    cy.get('.ui-selected').should('not.contain', 'Nine');
  });
});