import pageProfil from "../../support/PageObject/pageProfil.cy"
const dataRegis = require('../../fixtures/KasirAja/dataTestLogin.json')

describe('Registration Functionality', () => {
  const regis = new pageProfil
  it('Registration with empty nama toko', () => {
    cy.visit(dataRegis.url) // url
    regis.clickMenuDaftar() // menu daftar
    regis.inputEmail(dataRegis.email) //email
    regis.inputPassword(dataRegis.password) //password
    regis.clickDaftar()// simpan
    //validasi
    regis.checkEmptyName() // message error
  })

  it('Registration with empty email', () => {
    cy.visit(dataRegis.url) // url
    regis.clickMenuDaftar() // menu daftar
    regis.inputName(dataRegis.namaToko) //name
    regis.inputPassword(dataRegis.password) //password
    regis.clickDaftar()// simpan
    //validasi
    regis.checkEmptyEmail() //error message
  })

  it('Registration with empty password', () => {
    cy.visit(dataRegis.url) // url
    regis.clickMenuDaftar() // menu daftar
    regis.inputName(dataRegis.namaToko) //name
    regis.inputEmail(dataRegis.email) //email
    regis.clickDaftar()// simpan
    //validasi
    regis.checkEmptyPassword() //error message
  })

  it('Registration with invaid format email', () => {
    cy.visit(dataRegis.url) // url
    regis.clickMenuDaftar() // menu daftar
    regis.inputName(dataRegis.namaToko) //name
    regis.inputEmail(dataRegis.invalidFormatEmail) //invalid format email
    regis.inputPassword(dataRegis.password) //password
    regis.clickDaftar()// simpan
    //validasi
    regis.checkInvalidFormatEmail() //error message
  })

  it('Success registration', () => {
    cy.visit(dataRegis.url) // url
    regis.clickMenuDaftar() // menu daftar
    regis.inputName(dataRegis.namaToko) //name
    regis.inputEmail(dataRegis.email) // email
    regis.inputPassword(dataRegis.password) //password
    regis.clickDaftar()// simpan
    //validasi
    regis.checkMessage() //success message
    cy.url().should('include', '/login') //url
  })
})