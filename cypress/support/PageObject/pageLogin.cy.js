class pageLogin {

    email = '#email'
    password = '#password'
    loginButton = '.chakra-button'
    errorMessage = '.chakra-alert'

    inputEmail(email){
        cy.input(this.email, email)
    }

    inputPassword(password){
        cy.input(this.password, password)
    }

    clickLogin(){
        cy.get(this.loginButton).click()
    }
    checkUrl(){
        cy.url().should('include', '/dashboard') //url
    }
    checkErrorKredensial(){
        cy.get(this.errorMessage).should('have.text','Kredensial yang Anda berikan salah')
    }

    checkErrorInvalidEmail(){
        cy.get(this.errorMessage).should('have.text','"email" must be a valid email')
    }

    checkErrorEmptyEmail(){
        cy.get(this.errorMessage).should('have.text','"email" is not allowed to be empty')
    }

    checkErrorEmptyPassword(){
        cy.get(this.errorMessage).should('have.text','"password" is not allowed to be empty')
    }

}
export default pageLogin