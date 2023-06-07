describe('User Functionality', () => {
  it('Success add user', () => {
    cy.login()
    cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
    cy.get('.chakra-button').click() // tambah
    cy.get('#nama').type('Sandi Hidayat') //nama
    cy.get('#email').type('sandi@gmail.com') //email
    cy.get('#password').type('zxcv1234') //password
    cy.get('.css-l5lnz6').click() //simpan
    //validasi
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
    cy.get('tbody.css-0 > .css-0 > :nth-child(1)').should('be.visible') // check name
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(2)').should('be.visible') // check email
  })

  it('Add user with invalid format email', () => {
    cy.login()
    cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
    cy.get('.chakra-button').click() // tambah
    cy.get('#nama').type('Sandi Hidayat') //nama
    cy.get('#email').type('sandigmail.com') //email
    cy.get('#password').type('zxcv1234') //password
    cy.get('.css-l5lnz6').click() //simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"email" must be a valid email')
  })

  // it('Add user with empty name, email & password', () => {
  //   cy.login()
  //   cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
  //   cy.get('.chakra-button').click() // tambah
  //   cy.get('#nama').type(' ') //nama
  //   cy.get('#email').type(' ') //email
  //   cy.get('#password').type(' ') //password
  //   cy.get('.css-l5lnz6').click() //simpan
  //   //validasi
  //   cy.get('.chakra-alert').should('be.visible') //eeror message
  //   cy.get('.chakra-alert').should('have.text','"email" must be a valid email')
  // })

  it('Add user with empty email', () => {
    cy.login()
    cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
    cy.get('.chakra-button').click() // tambah
    cy.get('#nama').type('Sandi Hidayat') //nama
    cy.get('#email').type(' ') //email
    cy.get('#password').type('zxcv1234') //password
    cy.get('.css-l5lnz6').click() //simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"email" must be a valid email')
  })

   it('Search User', () => {
    cy.login()
    cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
    cy.get('.chakra-input').type('Sandi Hidayat')
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').click()
    //validasi
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').should('have.text','Sandi Hidayat')
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(2)').should('have.text','sandi@gmail.com')
  })

  it('Success edit user', () => {
    cy.login()
    cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
    cy.get('.chakra-input').type('Sandi Hidayat')
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').click()
    cy.get('#menu-button-35').click()
    cy.get('#menu-list-35-menuitem-32').click()
    cy.get('#nama').clear()
    cy.get('#nama').type('Sandi Pratama')
    cy.get('#email').clear()
    cy.get('#email').type('sandi2@gmail.com')
    cy.get('#password').clear()
    cy.get('#password').type('12345678')
    cy.get('.css-l5lnz6').click()
    // Validasi
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
    cy.get('tbody.css-0 > .css-0 > :nth-child(1)').should('be.visible') // check name
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(2)').should('be.visible') // check email
  })

  it('Edit user with invalid format email', () => {
    cy.login()
    cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
    cy.get('.chakra-input').type('Sandi Pratama')
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').click()
    cy.get('#menu-button-35').click()
    cy.get('#menu-list-35-menuitem-32').click()
    cy.get('#nama').clear()
    cy.get('#nama').type('Sandi Pratama')
    cy.get('#email').clear()
    cy.get('#email').type('sandi2gmailcom')
    cy.get('#password').clear()
    cy.get('#password').type('12345678')
    cy.get('.css-l5lnz6').click()
    // Validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"email" must be a valid email')
  })

  it('Edit user with empty email', () => {
    cy.login()
    cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
    cy.get('.chakra-input').type('Sandi Pratama')
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').click()
    cy.get('#menu-button-35').click()
    cy.get('#menu-list-35-menuitem-32').click()
    cy.get('#nama').clear()
    cy.get('#nama').type('Sandi Pratama')
    cy.get('#email').clear()
    cy.get('#email').type(' ')
    cy.get('#password').clear()
    cy.get('#password').type('12345678')
    cy.get('.css-l5lnz6').click()
    // Validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"email" must be a valid email')
  })

  it('Edit user with empty email', () => {
    cy.login()
    cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
    cy.get('.chakra-input').type('Sandi Pratama')
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').click()
    cy.get('#menu-button-35').click()
    cy.get('#menu-list-39-menuitem-37').click({force:true})
    cy.get('.css-n45e6f').click({force:true})
    
    // Validasi
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
  })

})