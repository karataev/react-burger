describe('Конструктор', function() {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('При клике по ингредиенту открывается модальное окно', () => {
    cy.get('[data-test="Краторная булка N-200i"]').click();
    cy.contains('Детали ингредиента').should('exist');
  });

  it('Модалка закрывается при клике на крестик', () => {
    cy.get('[data-test="Краторная булка N-200i"]').click();
    cy.get('[data-test="close-icon"]').click();
    cy.contains('Детали ингредиента').should('not.exist');
  })

  it('Модалка закрывается при клике на оверлей', () => {
    cy.get('[data-test="Краторная булка N-200i"]').click();
    cy.get('[data-test="modal-overlay"]').click(1, 1);
    cy.contains('Детали ингредиента').should('not.exist');
  })

  it('Работает drag-and-drop ингредиентов', () => {
    cy.get('[data-test="bun-top"]').should('not.exist');
    cy.get('[data-test="bun-bottom"]').should('not.exist');
    cy.get('[data-test="Краторная булка N-200i"]').trigger("dragstart");
    cy.get('[data-test="drop-container"]').trigger('drop');
    cy.get('[data-test="bun-top"]').should('exist');
    cy.get('[data-test="bun-bottom"]').should('exist');
  })

});
