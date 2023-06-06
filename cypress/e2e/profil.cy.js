describe('Profil Functionality', () => {
  it('Success edit profil', () => {
    cy.login()
    cy.get('#menu-button-14').click() // profil button
    cy.get('#menu-list-14-menuitem-11').click({force:true}) //nama toko
    cy.get('#nama').clear()
    cy.get('#nama').type('Toko Subur') //nama toko
    cy.get('#email').clear()
    cy.get('#email').type('subur@gmail.com') //email
    cy.get('#password').clear()
    cy.get('#password').type('12345678') //password
    cy.get('.css-l5lnz6').click() // simpan
    //validasi
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
  })

  it('Edit profil with invalid format email', () => {
    cy.login()
    cy.get('#menu-button-14').click() // profil button
    cy.get('#menu-list-14-menuitem-11').click({force:true}) //nama toko
    cy.get('#nama').clear()
    cy.get('#nama').type('Toko Subur') //nama toko
    cy.get('#email').clear()
    cy.get('#email').type('subur@gmailcom') //email
    cy.get('#password').clear()
    cy.get('#password').type('12345678') //password
    cy.get('.css-l5lnz6').click() // simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible') // mesagge
    cy.get('.chakra-alert').should('have.text','"email" must be a valid email')
  })

  it('Edit profil with empty email', () => {
    cy.login()
    cy.get('#menu-button-14').click() // profil button
    cy.get('#menu-list-14-menuitem-11').click({force:true}) //nama toko
    cy.get('#nama').clear()
    cy.get('#nama').type(' ') //nama toko
    cy.get('#email').clear()
    cy.get('#email').type(' ') //email
    cy.get('#password').clear()
    cy.get('#password').type('12345678') //password
    cy.get('.css-l5lnz6').click() // simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible') // mesagge
    cy.get('.chakra-alert').should('have.text','"email" must be a valid email')
  })

})