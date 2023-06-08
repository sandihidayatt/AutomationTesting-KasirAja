import 'cypress-xpath';

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
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').should('have.text','Sandi Hidayat') // value name
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(2)').should('have.text','sandi@gmail.com') // value email
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

  it('Add user with empty name, email & password', () => {
    cy.login()
    cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
    cy.get('.chakra-button').click() // tambah
    cy.get('.css-l5lnz6').click() //simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"name" is not allowed to be empty')
  })

  it('Add user with empty name', () => {
    cy.login()
    cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
    cy.get('.chakra-button').click() // tambah
    cy.get('#email').type('sandi@gmail.com') //email
    cy.get('#password').type('zxcv1234') //password
    cy.get('.css-l5lnz6').click() //simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"name" is not allowed to be empty')
  })

  it('Add user with empty email', () => {
    cy.login()
    cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
    cy.get('.chakra-button').click() // tambah
    cy.get('#nama').type('Sandi Hidayat') //email
    cy.get('#password').type('zxcv1234') //password
    cy.get('.css-l5lnz6').click() //simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"email" is not allowed to be empty')
  })

   it('Add user with empty password', () => {
    cy.login()
    cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
    cy.get('.chakra-button').click() // tambah
    cy.get('#nama').type('Sandi Hidayat') //email
    cy.get('#email').type('sandi@gmail.com') //password
    cy.get('.css-l5lnz6').click() //simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"password" is not allowed to be empty')
  })

   it('Success search User', () => {
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
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/button[1]').click({force:true})
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/a[1]').click({force:true})
    cy.get('#nama').clear()
    cy.get('#nama').type('Sandi Pratama')
    cy.get('#email').clear()
    cy.get('#email').type('sandi2@gmail.com')
    cy.get('#password').clear()
    cy.get('#password').type('12345678')
    cy.get('.css-l5lnz6').click()
    // Validasi
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
  })

  it('Edit user with invalid format email', () => {
    cy.login()
    cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
    cy.get('.chakra-input').type('Sandi Pratama')
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').click()
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/button[1]').click({force:true})
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/a[1]').click({force:true})
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

   it('Edit user with empty nama, email & password', () => {
    cy.login()
    cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
    cy.get('.chakra-input').type('Sandi Pratama')
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').click()
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/button[1]').click({force:true})
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/a[1]').click({force:true})
    cy.get('#nama').clear()
    cy.get('#email').clear()
    cy.get('#password').clear()
    cy.get('.css-l5lnz6').click()
    // Validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"name" is not allowed to be empty')
  })

  it('Edit user with empty nama', () => {
    cy.login()
    cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
    cy.get('.chakra-input').type('Sandi Pratama')
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').click()
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/button[1]').click({force:true})
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/a[1]').click({force:true})
    cy.get('#nama').clear()
    cy.get('#email').clear()
    cy.get('#email').type('sandi2@gmail.com')
    cy.get('#password').clear()
    cy.get('#password').type('12345678')
    cy.get('.css-l5lnz6').click()
    // Validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"name" is not allowed to be empty')
  })

   it('Edit user with empty email', () => {
    cy.login()
    cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
    cy.get('.chakra-input').type('Sandi Pratama')
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').click()
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/button[1]').click({force:true})
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/a[1]').click({force:true})
    cy.get('#nama').clear()
    cy.get('#nama').type('Sandi Pratama')
    cy.get('#email').clear()
    cy.get('#password').clear()
    cy.get('#password').type('12345678')
    cy.get('.css-l5lnz6').click()
    // Validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"email" is not allowed to be empty')
  })

  it('Success delete user', () => {
    cy.login()
    cy.get('[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click() // menu pengguna
    cy.get('.chakra-input').type('Sandi Pratama')
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').click()
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/button[1]').click({force:true})
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/button[1]').click({force:true})
    cy.get('.css-n45e6f').click({force:true})
    // Validasi
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
  })

})