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

  
  it('Search product', () => {
    cy.login()
    cy.get('[href="/products"] > .css-ewi1jp').click() //menu produk
    cy.get('.css-0 > .chakra-input__group > .chakra-input').type('Chino Hitam')
    //validasi
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(2)').should('have.text','Chino Hitam')
  })

  it('Success edit product', () => {
    cy.login()
    cy.get('[href="/products"] > .css-ewi1jp').click() //menu produk
    cy.get('.css-0 > .chakra-input__group > .chakra-input').type('Chino Hitam')
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[10]/button[1]').click({force:true})
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[10]/div[1]/div[1]/a[1]').click({force:true})
    cy.get('#nama').clear()
    cy.get('#nama').type('Chino Putih')
    cy.get('#deskripsi').clear()
    cy.get('#deskripsi').type('size S, M, L, XL, XXL')
    cy.xpath("//input[@id='harga beli']").clear()
    cy.xpath("//input[@id='harga beli']").type('80000')
    cy.xpath("//input[@id='harga jual']").clear()
    cy.xpath("//input[@id='harga jual']").type('110000')
    cy.get('#stok').clear()
    cy.get('#stok').type('50')
    cy.get('.chakra-button').click()
    //validasi
    cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
  })

  it('Edit product with empty nama', () => {
    cy.login()
    cy.get('[href="/products"] > .css-ewi1jp').click() //menu produk
    cy.get('.css-0 > .chakra-input__group > .chakra-input').type('Chino Hitam')
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[10]/button[1]').click({force:true})
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[10]/div[1]/div[1]/a[1]').click({force:true})
    cy.get('#nama').clear()
    cy.get('#deskripsi').clear()
    cy.get('#deskripsi').type('size S, M, L, XL, XXL')
    cy.get('.chakra-button').click()
    //validasi
    cy.get('.chakra-alert').should('have.text','"name" is not allowed to be empty')
  })

  it('Success delete product', () => {
    cy.login()
    cy.get('[href="/products"] > .css-ewi1jp').click() //menu produk
    cy.get('.css-0 > .chakra-input__group > .chakra-input').type('Chino Putih')
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[10]/button[1]').click({force:true})
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[10]/div[1]/div[1]/button[1]').click({force:true})
    cy.get('.css-n45e6f').click({force:true})
     // Validasi
     cy.get('#chakra-toast-manager-top-right').should('be.visible') //message
  })
})