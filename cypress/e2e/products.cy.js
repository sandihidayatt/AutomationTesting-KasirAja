import 'cypress-xpath';

describe('Products Funtionality', () => {
  it('Success add product', () => {
    cy.login()
    cy.get('[href="/products"] > .css-ewi1jp').click() //menu produk
    cy.get('.chakra-button').click() //tambah
    cy.get('#nama').type('Chino Hitam')
    cy.get('#deskripsi').type('size S, M, L, XL')
    cy.xpath("//input[@id='harga beli']").type('70000')
    cy.xpath("//input[@id='harga jual']").type('100000')
    cy.get('#stok').clear()
    cy.get('#stok').type('40')
    cy.get('#kategori').click() // kategori
    cy.get(':nth-child(1) > .css-u3dlpe').click({force:true}) //kategori
    cy.get('.chakra-button').click() //simpan
    //validasi
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
  })

  it('Add product with empty nama', () => {
    cy.login()
    cy.get('[href="/products"] > .css-ewi1jp').click() //menu produk
    cy.get('.chakra-button').click() //tambah
    cy.get('#deskripsi').type('size S, M, L, XL')
    cy.xpath("//input[@id='harga beli']").type('70000')
    cy.xpath("//input[@id='harga jual']").type('100000')
    cy.get('#stok').clear()
    cy.get('#stok').type('40')
    cy.get('#kategori').click() // kategori
    cy.get(':nth-child(1) > .css-u3dlpe').click({force:true}) //kategori
    cy.get('.chakra-button').click() //simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"name" is not allowed to be empty')
  })

  it('Add product with empty harga beli', () => {
    cy.login()
    cy.get('[href="/products"] > .css-ewi1jp').click() //menu produk
    cy.get('.chakra-button').click() //tambah
    cy.get('#nama').type('Chino Hitam')
    cy.get('#deskripsi').type('size S, M, L, XL')
    cy.xpath("//input[@id='harga beli']").clear()
    cy.xpath("//input[@id='harga jual']").type('100000')
    cy.get('#stok').clear()
    cy.get('#stok').type('40')
    cy.get('#kategori').click() // kategori
    cy.get(':nth-child(1) > .css-u3dlpe').click({force:true}) //kategori
    cy.get('.chakra-button').click() //simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"cost" must be a number')
  })

  it('Add product with empty harga jual', () => {
    cy.login()
    cy.get('[href="/products"] > .css-ewi1jp').click() //menu produk
    cy.get('.chakra-button').click() //tambah
    cy.get('#nama').type('Chino Hitam')
    cy.get('#deskripsi').type('size S, M, L, XL')
    cy.xpath("//input[@id='harga beli']").type('70000')
    cy.xpath("//input[@id='harga jual']").clear()
    cy.get('#stok').clear()
    cy.get('#stok').type('40')
    cy.get('#kategori').click() // kategori
    cy.get(':nth-child(1) > .css-u3dlpe').click({force:true}) //kategori
    cy.get('.chakra-button').click() //simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"price" must be a number')
  })

  it('Add product with empty stok', () => {
    cy.login()
    cy.get('[href="/products"] > .css-ewi1jp').click() //menu produk
    cy.get('.chakra-button').click() //tambah
    cy.get('#nama').type('Chino Hitam')
    cy.get('#deskripsi').type('size S, M, L, XL')
    cy.xpath("//input[@id='harga beli']").type('70000')
    cy.xpath("//input[@id='harga jual']").type('100000')
    cy.get('#stok').clear()
    cy.get('#kategori').click() // kategori
    cy.get(':nth-child(1) > .css-u3dlpe').click({force:true}) //kategori
    cy.get('.chakra-button').click() //simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"stock" must be a number')
  })

  it('Add poduct with empty kategori', () => {
    cy.login()
    cy.get('[href="/products"] > .css-ewi1jp').click() //menu produk
    cy.get('.chakra-button').click() //tambah
    cy.get('#nama').type('Chino Hitam')
    cy.get('#deskripsi').type('size S, M, L, XL')
    cy.xpath("//input[@id='harga beli']").type('70000')
    cy.xpath("//input[@id='harga jual']").type('100000')
    cy.get('#stok').clear()
    cy.get('#stok').type('40')
    cy.get('.chakra-button').click() //simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"category_id" is required')
  })

  it('Add poduct with empty kategori', () => {
    cy.login()
    cy.get('[href="/products"] > .css-ewi1jp').click() //menu produk
    cy.get('.chakra-button').click() //tambah
    cy.get('#nama').type('Chino Hitam')
    cy.get('#deskripsi').type('size S, M, L, XL')
    cy.xpath("//input[@id='harga beli']").type('100000')
    cy.xpath("//input[@id='harga jual']").type('70000')
    cy.get('#stok').clear()
    cy.get('#stok').type('40')
    cy.get('#kategori').click() // kategori
    cy.get(':nth-child(1) > .css-u3dlpe').click({force:true}) //kategori
    cy.get('.chakra-button').click() //simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"price" must be greater than ref:cost')
  })

  it('Add product with harga beli smaller than 0', () => {
    cy.login()
    cy.get('[href="/products"] > .css-ewi1jp').click() //menu produk
    cy.get('.chakra-button').click() //tambah
    cy.get('#nama').type('Chino Hitam')
    cy.get('#deskripsi').type('size S, M, L, XL')
    cy.xpath("//input[@id='harga beli']").type('0')
    cy.xpath("//input[@id='harga jual']").type('70000')
    cy.get('#stok').clear()
    cy.get('#stok').type('40')
    cy.get('#kategori').click() // kategori
    cy.get(':nth-child(1) > .css-u3dlpe').click({force:true}) //kategori
    cy.get('.chakra-button').click() //simpan
    //validasi
    cy.get('.chakra-alert').should('be.visible') //eeror message
    cy.get('.chakra-alert').should('have.text','"cost" must be greater than 0')
  })
})