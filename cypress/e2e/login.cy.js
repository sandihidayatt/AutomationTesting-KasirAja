describe('Login Functionality', () => {
  // it('Success login', () => {
  //   cy.visit('https://kasirdemo.belajarqa.com')
  //   cy.get('#email').type('subur@gmail.com') //email
  //   cy.get('#password').type('12345678') //password
  //   cy.get('.chakra-button').click() // login
  //   //validasi
  //   cy.url().should('include', '/dashboard') //url
  // })

  // it('Login with invalid email & pasword', () => {
  //   cy.visit('https://kasirdemo.belajarqa.com')
  //   cy.get('#email').type('bukansubur@gmail.com') //email
  //   cy.get('#password').type('87654321') //password
  //   cy.get('.chakra-button').click() // login
  //   //validasi
  //   cy.get('.chakra-alert').should('be.visible')
  //   cy.get('.chakra-alert').should('have.text','Kredensial yang Anda berikan salah')
  // })

  // it('Login with invalid email', () => {
  //   cy.visit('https://kasirdemo.belajarqa.com')
  //   cy.get('#email').type('bukansubur@gmail.com') //email
  //   cy.get('#password').type('12345678') //password
  //   cy.get('.chakra-button').click() // login
  //   //validasi
  //   cy.get('.chakra-alert').should('be.visible')
  //   cy.get('.chakra-alert').should('have.text','Kredensial yang Anda berikan salah')
  // })

  // it('Login with invalid password', () => {
  //   cy.visit('https://kasirdemo.belajarqa.com')
  //   cy.get('#email').type('subur@gmail.com') //email
  //   cy.get('#password').type('87654321') //password
  //   cy.get('.chakra-button').click() // login
  //   //validasi
  //   cy.get('.chakra-alert').should('be.visible')
  //   cy.get('.chakra-alert').should('have.text','Kredensial yang Anda berikan salah')
  // })

  // it('Login with invalid format email', () => {
  //   cy.visit('https://kasirdemo.belajarqa.com')
  //   cy.get('#email').type('suburgmail.com') //email
  //   cy.get('#password').type('12345678') //password
  //   cy.get('.chakra-button').click() // login
  //   //validasi
  //   cy.get('.chakra-alert').should('be.visible')
  //   cy.get('.chakra-alert').should('have.text','"email" must be a valid email')
  // })

  // it('Login with empty email & password', () => {
  //   cy.visit('https://kasirdemo.belajarqa.com')
  //   cy.get('#email').type(' ') //email
  //   cy.get('#password').type(' ') //password
  //   cy.get('.chakra-button').click() // login
  //   //validasi
  //   cy.get('.chakra-alert').should('be.visible')
  //   cy.get('.chakra-alert').should('have.text','"email" is not allowed to be empty')
  // })

  // it('Login with empty email', () => {
  //   cy.visit('https://kasirdemo.belajarqa.com')
  //   cy.get('#email').type(' ') //email
  //   cy.get('#password').type('12345678') //password
  //   cy.get('.chakra-button').click() // login
  //   //validasi
  //   cy.get('.chakra-alert').should('be.visible')
  //   cy.get('.chakra-alert').should('have.text','"email" is not allowed to be empty')
  // })

  it('Login with empty password', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('#email').type('subur@gmail.com') //email
    cy.get('#password').type(' ') //password
    cy.get('.chakra-button').click() // login
    //validasi
    cy.get('.chakra-alert').should('be.visible')
    cy.get('.chakra-alert').should('have.text','Kredensial yang Anda berikan salah')
  })
  
})