describe('template spec', () => {
  it('passes', () => {
    cy.login()
    cy.get('#menu-button-14').click()
    cy.get('#menu-list-14-menuitem-12').click({force:true})
    // validasi
    cy.url().should('include','/login')

  })
})