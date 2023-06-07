describe('Logout Functionality', () => {
  it('Success logout', () => {
    cy.login() // login
    cy.get('#menu-button-14').click() // foto profil
    cy.get('#menu-list-14-menuitem-12').click({force:true}) // logout
    // validasi
    cy.url().should('include','/login')

  })
})