import 'cypress-xpath';
import pagepurchase from '../../support/PageObject/pagePurchase.cy';

describe('Purchase Functionality', () => {
  const purchase = new pagepurchase
  it('Success add purchase', () => {
    cy.login() //login
    purchase.clickpurchase() //menu purchase
    purchase.clickTambah() // tambah buton
    purchase.clickProduk() // pilih produk
    purchase.clickRow1() // pilih produk di tabel baris 1
    purchase.clickProduk() // pilih produk 
    purchase.clickRow2() // pilih produk di tabel baris 2
    purchase.inputCatatan('Lunas') // catatan
    purchase.clickSimpan() // simpan
    //validasi
    purchase.checkMessage() //message success
  })

  it('Add purchase with empty product', () => {
    cy.login()
    purchase.clickpurchase() //menu purchase
    purchase.clickTambah() // tambah buton
    purchase.inputCatatan('Lunas') // catatan
    purchase.clickSimpan() // simpan
    //validasi
    purchase.checkMessageEmpty() //message
  })

  it('Add purchase with empty no invoice', () => {
    cy.login()
    purchase.clickpurchase() //menu purchase
    purchase.clickTambah() // tambah buton
    purchase.clickProduk() // pilih produk
    purchase.clickRow1() // pilih produk di tabel baris 1
    purchase.clickProduk() // pilih produk 
    purchase.clickRow2() // pilih produk di tabel baris 2
    purchase.inputCatatan('Lunas') // catatan
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/input[1]').clear() // remove no invoice
    purchase.clickSimpan() // simpan
    //validasi
    purchase.checkMessageError()//message
  })

  it('Success search purchase', () => {
    cy.login()
    purchase.clickpurchase() //menu purchase
    purchase.inputSearch('INV/10/5/2023/1686357502') // input search
    //validasi
    cy.get('tbody.css-0 > .css-0 > :nth-child(1)').should('have.text','INV/10/5/2023/1686357502') // check hasil pencarian
  })

})