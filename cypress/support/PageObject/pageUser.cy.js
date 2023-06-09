import 'cypress-xpath';

class pageUser {
    menuPengguna = '[href="/users"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q'
    tambah = '.chakra-button'
    nama = '#nama'
    email = '#email'
    password = '#password'
    simpan = '.css-l5lnz6'
    message = '#chakra-toast-manager-top-right'
    alert = '.chakra-alert'
    tigaTitik = '/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/button[1]'
    ubah = '/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/a[1]'
    tabelNama = 'tbody.css-0 > :nth-child(1) > :nth-child(1)'
    tabelEmail = 'tbody.css-0 > :nth-child(1) > :nth-child(2)'
    search = '.chakra-input'
    searchButton = 'tbody.css-0 > :nth-child(1) > :nth-child(1)'
    hapus = '/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/button[1]'
    delete = '.css-n45e6f'

    clickPengguna() {
        cy.get(this.menuPengguna).click()
    }

    clickTambah() {
        cy.get(this.tambah).click()    
    }

    inputNama(nama) {
        cy.get(this.nama).clear()
        cy.input(this.nama,nama)
    }

    inputEmail(email) {
        cy.get(this.email).clear()
        cy.input(this.email,email)
    }

    inputPassword(password){
        cy.get(this.password).clear()
        cy.input(this.password,password)
    }

    clickSimpan(){
        cy.get(this.simpan).click()
    }

    checkMessage(){
        cy.get(this.message).should('be.visible') 
    }

    checkTableNama(){
        cy.get(this.tabelNama).should('have.text','Sandi Hidayat')
    }

    checkTableEmail(){
        cy.get(this.tabelEmail).should('have.text','sandi@gmail.com')
    }

    checkInvalidFormatEmail(){
        cy.get(this.alert).should('have.text','"email" must be a valid email')
    }

    checkEmptyName(){
        cy.get(this.alert).should('have.text','"name" is not allowed to be empty')
    }

    checkEmptyEmail(){
        cy.get(this.alert).should('have.text','"email" is not allowed to be empty')
    }

    checkEmptyPassword(){
        cy.get(this.alert).should('have.text','"password" is not allowed to be empty')
    }

    inputSearch(search){
        cy.input(this.search,search)
    }

    clickSearch(){
        cy.get(this.searchButton).click()
    }

    clickTigaTitik(){
        cy.xpath(this.tigaTitik).click({force:true})
    }

    clickUbah(){
        cy.xpath(this.ubah).click({force:true})
    }

    clickHapus(){
        cy.xpath(this.hapus).click({force:true})
    }

    clickDelete(){
        cy.get(this.delete).click({force:true})
    }

}
export default pageUser