import 'cypress-xpath';
import pageCategory from "../../support/PageObject/pageCategory.cy"

describe('Category Functionality', () => {
  const category = new pageCategory
  it('Succes add category', () => {
    cy.login() //login
    category.clickCategory() // menu kategori
    category.clickTambah() // click tambah
    category.inputNama('Pants') // input nama kategori
    category.inputDeskripsi('Chino, Jeans')// input deskripsi
    category.clickSimpan() // click simpan
    //validasi
    category.checkMessage() // check message
  })

  it('Add category with empty nama', () => {
    cy.login() //login
    category.clickCategory() // menu kategori
    category.clickTambah() // clcik tambah
    category.inputDeskripsi('Chino, Jeans') // input deskripsi
    category.clickSimpan() // click simpan
    // validasi
    category.checkEmptyName() //check message
  })

  it('Success search category', () => {
    cy.login() //login
    category.clickCategory() // menu kategori
    category.inputSearch('Pants') // input search
    //validasi
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(1)').should('have.text','Pants') // check tabel
    cy.get('tbody.css-0 > :nth-child(1) > :nth-child(2)').should('have.text','Chino, Jeans') // check tabel
  })

  it('Success edit category', () => {
    cy.login() // login
    category.clickCategory() // clcik menu kategori
    category.inputSearch('Pants') // input search
    category.clickTigaTitik() // click 3 titik button
    category.clickUbah() // clcik ubah
    category.inputNama('Celana') // input nama kategori
    category.inputDeskripsi('Chino, Jeans, Cargo') // input deskripsi
    category.clickSimpan() // click simpan
    cy.wait(2000)
    //validasi
    category.checkMessage() // check message
  })
  
  it('Edit category with empty nama', () => {
    cy.login() // login
    category.clickCategory() // click kategori
    category.inputSearch('Celana') // input search
    category.clickTigaTitik() // click 3 titik
    category.clickUbah() // click ubah
    cy.get('#nama').clear() // clear nama
    category.inputDeskripsi('Chino, Jeans, Cargo') // input sesdkripsi
    category.clickSimpan() // click simpan
    //validasi
    category.checkEmptyName() // check message empty name
  })

  it('Success delete category', () => {
    cy.login() //login
    category.clickCategory() // menu kategori
    category.inputSearch('Celana') // input search
    category.clickTigaTitik() // click 3 titik 
    category.clickHapus() // click hapus
    category.clickDelete() //click delete
    //validasi
    category.checkMessage() //message
  })
})