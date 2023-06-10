import 'cypress-xpath';
import pageSales from '../../support/PageObject/pageSales.cy';


describe('Sales Functionality', () => {
  const sales = new pageSales
  it('Success add sales', () => {
    cy.login()
    sales.clickPenjualan() //menu penjualan
    sales.clickTambah() // tambah
    sales.clickPelanggan() //pelanggan
    sales.clickTabelPelanggan() // tabel pelanggan
    sales.clickProduk() //produk
    sales.clickTabelProduk1() // tabel produk baris ke 1
    sales.clickProduk() //produk
    sales.clickTabelProduk2() // tabel produk baris ke 2
    sales.inputDiskon(10000) // diskon
    sales.inputDiskon('Lunas') // catatan
    sales.bayar(10000000) // input bayar
    sales.clickBayar() // click bayar
    sales.checkMessage() //message
  })

  it('Add sales with empty product', () => {
    cy.login()
    sales.clickPenjualan() //menu penjualan
    sales.clickTambah() // tambah
    sales.clickBayar() // click bayar
    //validasi
    sales.checkMessage() //message //message
  })

  it('Add sales with jumlah bayar smaller then subtotal', () => {
    cy.login()
    sales.clickPenjualan() //menu penjualan
    sales.clickTambah() // tambah
    sales.clickPelanggan() //pelanggan
    sales.clickTabelPelanggan() // tabel pelanggan
    sales.clickProduk() //produk
    sales.clickTabelProduk1() // tabel produk baris ke 1
    sales.clickProduk() //produk
    sales.clickTabelProduk2() // tabel produk baris ke 2
    sales.inputDiskon(10000) // diskon
    sales.inputDiskon('Lunas') // catatan
    sales.bayar(1000) // input bayar
    sales.clickBayar() // click bayar
    //validasi
    sales.checkMessageErr() //message
  })


})