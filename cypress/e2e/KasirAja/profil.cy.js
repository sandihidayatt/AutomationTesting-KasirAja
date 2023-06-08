import pageProfil from "../../support/PageObject/pageProfil.cy"
const dataLogin = require("../../fixtures/KasirAja/dataTestLogin.json")

describe('Profil Functionality', () => {
  const profil = new pageProfil
  it('Success edit profil', () => {
    cy.login()
    profil.clickProfil() // profil button
    profil.clickNamaToko() //nama toko
    profil.inputNama(dataLogin.namaToko) //nama toko
    profil.inputEmail(dataLogin.email) //email
    profil.inputPassword(dataLogin.password) //password
    profil.clickSimpan() // simpan
    //validasi
    profil.checkMessage() //message
    profil.checkUrl()
  })

  it('Edit profil with invalid format email', () => {
    cy.login()
    profil.clickProfil() // profil button
    profil.clickNamaToko() //nama toko
    profil.inputNama(dataLogin.namaToko) //nama toko
    profil.inputEmail(dataLogin.invalidFormatEmail) //email
    profil.inputPassword(dataLogin.password) //password
    profil.clickSimpan() // simpan
    //validasi
    profil.checkInvalidFormatEmail()
  })

  it('Edit profil with empty nama & email', () => {
    cy.login()
    profil.clickProfil() // profil button
    profil.clickNamaToko() //nama toko
    cy.get('#nama').clear()
    cy.get('#email').clear()
    profil.inputPassword(dataLogin.password) //password
    profil.clickSimpan() // simpan
    //validasi
    profil.checkEmptyName()
  })

  it('Edit profil with empty nama', () => {
    cy.login()
    profil.clickProfil() // profil button
    profil.clickNamaToko() //nama toko
    cy.get('#nama').clear()
    profil.inputEmail(dataLogin.email) // email
    profil.inputPassword(dataLogin.password) //password
    profil.clickSimpan() // simpan
    //validasi
    profil.checkEmptyName()
  })

  it('Edit profil with empty email', () => {
    cy.login()
    profil.clickProfil() // profil button
    profil.clickNamaToko() //nama toko
    profil.inputNama(dataLogin.namaToko)
    cy.get('#email').clear()
    profil.inputPassword(dataLogin.password) //password
    profil.clickSimpan() // simpan
    //validasi
    profil.checkEmptyEmail()
  })

})