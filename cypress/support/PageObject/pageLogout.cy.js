class pageLogout {

    clickProfil(){
        cy.get('#menu-button-14').click() // click foto profil
    }

    clickLogout(){
        cy.get('#menu-list-14-menuitem-12').click({force:true}) // clcik logout
    }

    checkUrl(){
        cy.url().should('include','/login') //halaman login
    }

}
export default pageLogout