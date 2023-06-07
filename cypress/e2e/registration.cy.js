describe('Registration Functionality', () => {
  
  it('Registration with empty nama toko', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('.css-4rvv7a > a').click()
    cy.get('#name').clear() //name
    cy.get('#email').type('subur@gmail.com') //email
    cy.get('#password').type('12345678') //password
    cy.get('.css-1n8i4of').click()// simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible')
    cy.get('.chakra-alert').should('have.text','"name" is not allowed to be empty')
  })

  it('Registration with empty email', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('.css-4rvv7a > a').click()
    cy.get('#name').type('Toko Subur') //name
    cy.get('#email').clear() //email
    cy.get('#password').type('12345678') //password
    cy.get('.css-1n8i4of').click()// simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible')
    cy.get('.chakra-alert').should('have.text','"email" is not allowed to be empty') //error message
  })

  it('Registration with empty password', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('.css-4rvv7a > a').click()
    cy.get('#name').type('Toko Subur') //name
    cy.get('#email').type('subur@gmail.com') //email
    cy.get('#password').clear() //password
    cy.get('.css-1n8i4of').click()// simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible')
    cy.get('.chakra-alert').should('have.text','"password" is not allowed to be empty')
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
       cy.get('.chakra-alert').should('have.text','"email" must be a valid email')
  })

  it('Success registration', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('.css-4rvv7a > a').click()
    cy.get('#name').type('Toko Subur') //name
    cy.get('#email').type('subur@gmail.com') //email
    cy.get('#password').type('12345678') //password
    cy.get('.css-1n8i4of').click()// simpan
    //validasi
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
    cy.url().should('include', '/login') //url
  })
})