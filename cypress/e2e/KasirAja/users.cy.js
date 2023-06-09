import 'cypress-xpath';
import pageUser from "../../support/PageObject/pageUser.cy"
const dataUser = require("../../fixtures/KasirAja/dataTestUser.json")

describe('User Functionality', () => {
  const user = new pageUser
  it('Success add user', () => {
    cy.login() // login
    user.clickPengguna() // menu pengguna
    user.clickTambah() // tambah
    user.inputNama(dataUser.nama) //nama
    user.inputEmail(dataUser.email) //email
    user.inputPassword(dataUser.password) //password
    user.clickSimpan() //simpan
    //validasi
    user.checkMessage() //message
    user.checkTableNama() // value name
    user.checkTableEmail() // value email
  })

  it('Add user with invalid format email', () => {
    cy.login()
    user.clickPengguna() // menu pengguna
    user.clickTambah() // tambah
    user.inputNama(dataUser.nama) //nama
    user.inputEmail('sandigmail.com') //email
    user.inputPassword(dataUser.password) //password
    user.clickSimpan() //simpan
    //validasi
    user.checkInvalidFormatEmail() // check invalid format email
  })

  it('Add user with empty name, email & password', () => {
    cy.login()
    user.clickPengguna() // menu pengguna
    user.clickTambah() // tambah
    user.clickSimpan() //simpan
    //validasi
    user.checkEmptyName()
  })

  it('Add user with empty name', () => {
    cy.login()
    user.clickPengguna() // menu pengguna
    user.clickTambah() // tambah
    user.inputEmail(dataUser.email) //email
    user.inputPassword(dataUser.password) //password
    user.clickSimpan() //simpan
    //validasi
    user.checkEmptyName()
  })

  it('Add user with empty email', () => {
    cy.login()
    user.clickPengguna() // menu pengguna
    user.clickTambah() // tambah
    user.inputNama(dataUser.nama) //nama
    user.inputPassword(dataUser.password) //password
    user.clickSimpan() //simpan
    //validasi
    user.checkEmptyEmail()
  })

   it('Add user with empty password', () => {
    cy.login()
    user.clickPengguna() // menu pengguna
    user.clickTambah() // tambah
    user.inputNama(dataUser.nama) //nama
    user.inputEmail(dataUser.email) //email
    user.clickSimpan() //simpan
    //validasi
    user.checkEmptyPassword()
  })

   it('Success search User', () => {
    cy.login()
    user.clickPengguna() // menu pengguna
    user.inputSearch(dataUser.nama) // cari nama
    user.clickSearch()
    //validasi
    user.checkTableNama()
    user.checkTableEmail()
  })

  it('Success edit user', () => {
    cy.login()
    user.clickPengguna() // menu pengguna
    user.inputSearch(dataUser.nama) // cari nama
    user.clickSearch()
    user.clickTigaTitik()
    user.clickUbah()
    user.inputNama(dataUser.namaBaru)
    user.inputEmail(dataUser.emailBaru)
    user.inputPassword(dataUser.passwordBaru)
    user.clickSimpan()
    // Validasi
    user.checkMessage() //message
  })

  it('Edit user with invalid format email', () => {
    cy.login()
    user.clickPengguna() // menu pengguna
    user.inputSearch(dataUser.nama) // cari nama
    user.clickSearch()
    user.clickTigaTitik()
    user.clickUbah()
    user.inputNama(dataUser.namaBaru)
    user.inputEmail('sandi2gmail.com')
    user.inputPassword(dataUser.passwordBaru)
    user.clickSimpan()
    // Validasi
    user.checkInvalidFormatEmail()
  })

   it('Edit user with empty nama, email & password', () => {
    cy.login()
    user.clickPengguna() // menu pengguna
    user.inputSearch(dataUser.nama) // cari nama
    user.clickSearch()
    user.clickTigaTitik()
    user.clickUbah()
    cy.get('#nama').clear()
    cy.get('#email').clear()
    cy.get('#password').clear()
    user.clickSimpan()
    // Validasi
    user.checkEmptyName()
  })

  it('Edit user with empty nama', () => {
    cy.login()
    user.clickPengguna() // menu pengguna
    user.inputSearch(dataUser.nama) // cari nama
    user.clickSearch()
    user.clickTigaTitik()
    user.clickUbah()
    cy.get('#nama').clear()
    user.inputEmail(dataUser.emailBaru)
    user.inputPassword(dataUser.passwordBaru)
    user.clickSimpan()
    // Validasi
    user.checkEmptyName()
  })

   it('Edit user with empty email', () => {
    cy.login()
    user.clickPengguna() // menu pengguna
    user.inputSearch(dataUser.nama) // cari nama
    user.clickSearch()
    user.clickTigaTitik()
    user.clickUbah()
    user.inputNama(dataUser.namaBaru)
    cy.get('#email').clear()
    user.inputPassword(dataUser.passwordBaru)
    user.clickSimpan()
    // Validasi
    user.checkEmptyEmail()
  })

  it('Success delete user', () => {
    cy.login()
    user.clickPengguna() // menu pengguna
    user.inputSearch(dataUser.namaBaru) // cari nama
    user.clickSearch()
    user.clickTigaTitik()
    user.clickHapus()
    user.clickDelete()
    // Validasi
    user.checkMessage()
  })

})