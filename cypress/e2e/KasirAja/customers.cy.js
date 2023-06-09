import 'cypress-xpath';
import pageCustomer from '../../support/PageObject/pageCustomer.cy';
const dataCustomer = require('../../fixtures/KasirAja/dataTestCustomer.json')

describe('Customers Functionality', () => {
  const customer = new pageCustomer
  it('Success Add Customer', () => {
    cy.login() // login
    customer.clickPelanggan() //menu pelanggan
    customer.clickTambah() // tambah
    customer.inputNama(dataCustomer.name)
    cy.xpath("//input[@id='no.hp']").type(dataCustomer.noHp) // no hp
    customer.inputAlamat(dataCustomer.alamat) //alamat
    customer.inputKeterangan(dataCustomer.keterangan) //keterangan
    customer.clickSimpan() //simpan
    //validasi
    customer.checkMessage() //message
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').should('have.text','Bayu') // check velue tabel
  })

  it('Add customer with empty nama', () => {
    cy.login() // login
    customer.clickPelanggan() //menu pelanggan
    customer.clickTambah() // tambah
    cy.xpath("//input[@id='no.hp']").type('089912345678') //no hp
    customer.inputAlamat(dataCustomer.alamat) //alamat
    customer.inputKeterangan(dataCustomer.keterangan) //keterangan
    customer.clickSimpan() //simpan
    //validasi
    customer.checkAlertEmtyName() // check error empty name
  })

  it('Edit customer with invalid format no hp', () => {
    cy.login() // login
    customer.clickPelanggan() //menu pelanggan
    customer.clickTambah() // tambah
    customer.inputNama(dataCustomer.name)
    cy.xpath("//input[@id='no.hp']").type('NoKu') 
    customer.inputAlamat(dataCustomer.alamat) //alamat
    customer.inputKeterangan(dataCustomer.keterangan) //keterangan
    customer.clickSimpan() //simpan
    //validasi
    customer.checkInvalidFormatNoHp() // check invalid format no hp
  })
})