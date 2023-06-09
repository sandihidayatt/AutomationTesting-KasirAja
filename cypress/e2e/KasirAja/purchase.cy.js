import 'cypress-xpath';
import pageSales from '../../support/PageObject/pagePurchase.cy';

describe('Purchase Functionality', () => {
  const sales = new pageSales
  it('Success add purchase', () => {
    cy.login() //login
    sales.clickSales() //menu sales
    sales.clickTambah() // tambah buton
    sales.clickProduk() // pilih produk
    sales.clickRow1() // pilih produk di tabel baris 1
    sales.clickProduk() // pilih produk 
    sales.clickRow2() // pilih produk di tabel baris 2
    sales.inputCatatan('Lunas') // catatan
    sales.clickSimpan() // simpan
    //validasi
    sales.checkMessage() //message success
  })

  it('Add purchase with empty product', () => {
    cy.login()
    sales.clickSales() //menu sales
    sales.clickTambah() // tambah buton
    sales.inputCatatan('Lunas') // catatan
    sales.clickSimpan() // simpan
    //validasi
    sales.checkMessageEmpty() //message
  })

  it('Add purchase with empty no invoice', () => {
    cy.login()
    sales.clickSales() //menu sales
    sales.clickTambah() // tambah buton
    sales.clickProduk() // pilih produk
    sales.clickRow1() // pilih produk di tabel baris 1
    sales.clickProduk() // pilih produk 
    sales.clickRow2() // pilih produk di tabel baris 2
    sales.inputCatatan('Lunas') // catatan
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/input[1]').clear() // remove no invoice
    sales.clickSimpan() // simpan
    //validasi
    sales.checkMessageError()//message
  })

  it('Success search purchase', () => {
    cy.login()
    sales.clickSales() //menu sales
    sales.inputSearch('INV/9/5/2023/1686314901') // input search
    //validasi
    cy.get('tbody.css-0 > .css-0 > :nth-child(1)').should('have.text','INV/9/5/2023/1686314901') // check hasil pencarian
  })

})