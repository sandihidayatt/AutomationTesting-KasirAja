const dataLogin = require("../../fixtures/KasirAja/dataTestLogin.json")
import pageLogin from "../../support/PageObject/pageLogin.cy"

describe('Login Functionality', () => {
  const login = new pageLogin
  it('Success login', () => {
    cy.visit(dataLogin.url) //url
    login.inputEmail(dataLogin.email) //input email
    login.inputPassword(dataLogin.password) //input password
    login.clickLogin() //click login
    //validasi
    login.checkUrl() //check url dashboard
  })

  it('Login with invalid email & pasword', () => {
    cy.visit(dataLogin.url) //url
    login.inputEmail(dataLogin.invalidEmail) //input invalid email
    login.inputPassword(dataLogin.invalidPassword) //input invalid password
    login.clickLogin() //click login
    //validasi
    login.checkErrorKredensial() //chack error kredensial
  })

  it('Login with invalid email', () => {
    cy.visit(dataLogin.url) //url
    login.inputEmail(dataLogin.invalidEmail) //input invalid email
    login.inputPassword(dataLogin.password) //input password
    login.clickLogin() //click login
    //validasi
    login.checkErrorKredensial() //check error krediensial
  })

  it('Login with invalid password', () => {
    cy.visit(dataLogin.url) //url
    login.inputEmail(dataLogin.email) //input email
    login.inputPassword(dataLogin.invalidPassword) //invalid password
    login.clickLogin() //click login
    //validasi
    login.checkErrorKredensial() //check error kredensial
  })

  it('Login with invalid format email', () => {
    cy.visit(dataLogin.url) //url
    login.inputEmail(dataLogin.invalidFormatEmail) //input invalid format email
    login.inputPassword(dataLogin.password) //input password
    login.clickLogin() //click login
    //validasi
    login.checkErrorInvalidEmail() //check error invalid format email
  })

  it('Login with empty email & password', () => {
    cy.visit(dataLogin.url) //url
    login.clickLogin() //clcik login
    //validasi
    login.checkErrorEmptyEmail() //check error empty email
  })

  it('Login with empty email', () => {
    cy.visit(dataLogin.url) //url
    login.inputPassword(dataLogin.password) //input password
    login.clickLogin() //click login
    //validasi
    login.checkErrorEmptyEmail() //check error empty password
  })

  it('Login with empty password', () => {
    cy.visit(dataLogin.url)
    login.inputEmail(dataLogin.email) //password
    login.clickLogin() // login
    //validasi
    login.checkErrorEmptyPassword() //check error empty email
  })
  
})