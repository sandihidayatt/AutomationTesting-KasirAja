import pageLogout from "../../support/PageObject/PageLogout.cy"

describe('Logout Functionality', () => {
  it('Success logout', () => {
    const logout = new pageLogout
    cy.login() // login
    logout.clickProfil() // clcik foto profil
    logout.clickLogout() // clcik logout
    // validasi
    logout.checkUrl() // check url page login

  })
})