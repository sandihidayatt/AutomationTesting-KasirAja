describe('Registration Functionality', () => {
  
  it('Registration with empty nama toko', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('.css-4rvv7a > a').click()
    cy.get('#name').type(' ') //name
    cy.get('#email').type('subur@gmail.com') //email
    cy.get('#password').type('12345678') //password
    cy.get('.css-1n8i4of').click()// simpan
    //validasi
    // cy.get('.chakra-toast > .chakra-toast__inner > #  > .css-njbp03 > #toast-1-title').should('bi.visible')
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
    cy.url().should('include', '/login') //url
  })

  it('Registration with empty email', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('.css-4rvv7a > a').click()
    cy.get('#name').type('Toko Subur') //name
    cy.get('#email').type(' ') //email
    cy.get('#password').type('12345678') //password
    cy.get('.css-1n8i4of').click()// simpan
    //validasi
    // cy.get('.chakra-toast > .chakra-toast__inner > #  > .css-njbp03 > #toast-1-title').should('bi.visible')
    cy.get('.chakra-alert').should('be.visible').should('have.text','"email" is not allowed to be empty') //error message
  })

  it('Registration with empty password', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('.css-4rvv7a > a').click()
    cy.get('#name').type('Toko Subur') //name
    cy.get('#email').type('subur@gmail.com') //email
    cy.get('#password').type(' ') //password
    cy.get('.css-1n8i4of').click()// simpan
    //validasi
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
    cy.url().should('include', '/login') //url
  })

  it('Registration with invaid format email', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('.css-4rvv7a > a').click()
    cy.get('#name').type('Toko Subur') //name
    cy.get('#email').type('suburgmail.com') //email
    cy.get('#password').type('12345678') //password
    cy.get('.css-1n8i4of').click()// simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible') //error message
  })

  it('Success registration', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('.css-4rvv7a > a').click()
    cy.get('#name').type('Toko Subur') //name
    cy.get('#email').type('subur@gmail.com') //email
    cy.get('#password').type('12345678') //password
    cy.get('.css-1n8i4of').click()// simpan
    //validasi
    // cy.get('.chakra-toast > .chakra-toast__inner > #  > .css-njbp03 > #toast-1-title').should('bi.visible')
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
    cy.url().should('include', '/login') //url
  })
})