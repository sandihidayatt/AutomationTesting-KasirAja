import 'cypress-xpath';

describe('Customers Functionality', () => {
  it('Success Add Customer', () => {
    cy.login()
    cy.get(':nth-child(9) > .css-ewi1jp').click() //menu pelanggan
    cy.get('.css-1piskbq').click() // tambah
    cy.get('#nama').type('Bayu')
    cy.xpath("//input[@id='no.hp']").type('089912345678') 
    cy.get('#alamat').type('Bandung') //alamat
    cy.get('#keterangan').type('Pelanggan Baru') //keterangan
    cy.get('.chakra-button').click() //simpan
    //validasi
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').should('have.text','Bayu')
  })

  it('Add customer with empty nama', () => {
    cy.login()
    cy.get(':nth-child(9) > .css-ewi1jp').click() //menu pelanggan
    cy.get('.css-1piskbq').click() // tambah
    cy.get('#nama').clear()
    cy.xpath("//input[@id='no.hp']").type('089912345678') 
    cy.get('#alamat').type('Bandung') //alamat
    cy.get('#keterangan').type('Pelanggan Baru') //keterangan
    cy.get('.chakra-button').click() //simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible')
    cy.get('.chakra-alert').should('have.text','"name" is not allowed to be empty')
  })

  it('Edit customer with invalid format no hp', () => {
    cy.login()
    cy.get(':nth-child(9) > .css-ewi1jp').click() //menu pelanggan
    cy.get('.css-1piskbq').click() // tambah
    cy.get('#nama').type('Bayu')
    cy.xpath("//input[@id='no.hp']").type('NoKu') 
    cy.get('#alamat').type('Bandung') //alamat
    cy.get('#keterangan').type('Pelanggan Baru') //keterangan
    cy.get('.chakra-button').click() //simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible')
    cy.get('.chakra-alert').should('have.text','"phone" must be a number')
  })
})