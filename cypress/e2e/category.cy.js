import 'cypress-xpath';

describe('Category Functionality', () => {
  it('Succes add category', () => {
    cy.login()
    cy.get('[href="/categories"] > .css-ewi1jp').click()
    cy.get('.css-1piskbq').click() //tambah
    cy.get('#nama').type('Pants') // nama kategori
    cy.get('#deskripsi').type('Chino, Jeans') // deskripsi
    cy.get('.chakra-button').click() //simpan
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
  })

  it('Add category with empty nama', () => {
    cy.login()
    cy.get('[href="/categories"] > .css-ewi1jp').click()
    cy.get('.css-1piskbq').click() //tambah
    cy.get('#deskripsi').type('Chino, Jeans') // deskripsi
    cy.get('.chakra-button').click() //simpan
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"name" is not allowed to be empty')
  })

  it('Success search category', () => {
    cy.login()
    cy.get('[href="/categories"] > .css-ewi1jp').click()
    cy.get('.chakra-input').type('Pants')
    //validasi
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').should('have.text','Pants')
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(2)').should('have.text','Chino, Jeans')
  })

  it('Success edit category', () => {
    cy.login()
    cy.get('[href="/categories"] > .css-ewi1jp').click()
    cy.get('.chakra-input').type('Pants')
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]').click({force:true})
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/a[1]').click({force:true})
    cy.get('#nama').clear()
    cy.get('#nama').type('Celana')
    cy.get('#deskripsi').clear()
    cy.get('#deskripsi').type('Chino, Jeans, Cargo')
    cy.get('.chakra-button').click({force:true})
    cy.wait(2000)
    //validasi
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
  })

  
  it('Edit category with empty nama', () => {
    cy.login()
    cy.get('[href="/categories"] > .css-ewi1jp').click()
    cy.get('.chakra-input').type('Pants')
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]').click({force:true})
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/a[1]').click({force:true})
    cy.get('#nama').clear()
    cy.get('#deskripsi').clear()
    cy.get('#deskripsi').type('Chino, Jeans, Cargo')
    cy.get('.chakra-button').click({force:true})
    //validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"name" is not allowed to be empty')
  })

  it('Success delete category', () => {
    cy.login()
    cy.get('[href="/categories"] > .css-ewi1jp').click()
    cy.get('.chakra-input').type('Celana')
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]').click({force:true})
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/button[1]').click({force:true})
    cy.get('.css-n45e6f').click({force:true})
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
  })
})