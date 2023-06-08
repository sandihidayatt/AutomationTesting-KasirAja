import 'cypress-xpath';

describe('Purchase Functionality', () => {
  it('Success add purchase', () => {
    cy.login()
    cy.get('[href="/purchases"] > .css-ewi1jp').click()
    cy.get('.chakra-button').click()//tambah
    cy.get('.css-1xhj18k > .chakra-button').click() //produk
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').click({force:true})
    cy.get('.css-1xhj18k > .chakra-button').click() //produk
    cy.get('tbody.css-0 > :nth-child(2) > :nth-child(1)').click({force:true})
    cy.get('.chakra-textarea').type('Lunas')
    cy.get('.css-0 > .chakra-button').click()
    //validasi
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
  })

  it('Add purchase with empty product', () => {
    cy.login()
    cy.get('[href="/purchases"] > .css-ewi1jp').click()
    cy.get('.chakra-button').click()//tambah
    cy.get('.chakra-textarea').type('Lunas')
    cy.get('.css-0 > .chakra-button').click()
    //validasi
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
  })

  it('Add purchase with empty no invoice', () => {
    cy.login()
    cy.get('[href="/purchases"] > .css-ewi1jp').click()
    cy.get('.chakra-button').click()//tambah
    cy.get('.css-1xhj18k > .chakra-button').click() //produk
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').click({force:true})
    cy.get('.css-1xhj18k > .chakra-button').click() //produk
    cy.get('tbody.css-0 > :nth-child(2) > :nth-child(1)').click({force:true})
    cy.get('.chakra-textarea').type('Lunas')
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/input[1]').clear()
    cy.get('.css-0 > .chakra-button').click()
    //validasi
    cy.get('#chakra-toast-manager-top-right').should('have.text','error"invoice" is not allowed to be empty') //message
  })

  it('Success search purchase', () => {
    cy.login()
    cy.get('[href="/purchases"] > .css-ewi1jp').click()
    cy.get('.css-cipbx3 > .chakra-input__group > .chakra-input').type('INV/8/5/2023/1686191802')
    //validasi
    cy.get('tbody.css-0 > .css-0 > :nth-child(1)').should('have.text','INV/8/5/2023/1686191802')
  })

})