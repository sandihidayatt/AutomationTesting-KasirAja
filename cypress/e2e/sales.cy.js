import 'cypress-xpath';

describe('Sales Functionality', () => {
  it('Success add sales', () => {
    cy.login()
    cy.get('[href="/sales"] > .css-ewi1jp').click() //menu penjualan
    cy.get('.chakra-button').click() // tambah
    cy.get('#pelanggan').click()
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').click({force:true})
    cy.get('.css-1xhj18k > .chakra-button').click()
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').click({force:true})
    cy.get('.css-1xhj18k > .chakra-button').click()
    cy.get('tbody.css-0 > :nth-child(2) > :nth-child(1)').click({force:true})
    cy.get('#diskon').type(10000)
    cy.get('.chakra-textarea').type('Lunas')
    cy.get('.css-rltemf > .chakra-input').type('10000000')
    cy.get('.css-n4rzf0 > .chakra-button').click()
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
  //   cy.get('.chakra-modal__footer > .chakra-button').click()
  })

  it('Add sales with empty product', () => {
    cy.login()
    cy.get('[href="/sales"] > .css-ewi1jp').click() //menu penjualan
    cy.get('.chakra-button').click() // tambah
    cy.get('.css-n4rzf0 > .chakra-button').click() //simpan
    //validasi
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
  })

  it('Add sales with jumlah bayar smaller then subtotal', () => {
    cy.login()
    cy.get('[href="/sales"] > .css-ewi1jp').click() //menu penjualan
    cy.get('.chakra-button').click() // tambah
    cy.get('#pelanggan').click()
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').click({force:true})
    cy.get('.css-1xhj18k > .chakra-button').click()
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').click({force:true})
    cy.get('.css-1xhj18k > .chakra-button').click()
    cy.get('tbody.css-0 > :nth-child(2) > :nth-child(1)').click({force:true})
    cy.get('#diskon').type(10000)
    cy.get('.chakra-textarea').type('Lunas')
    cy.get('.css-rltemf > .chakra-input').type('1000')
    cy.get('.css-n4rzf0 > .chakra-button').click()
    //validasi
    cy.get(':nth-child(2) > .chakra-heading').should('be.visible')
  })


})