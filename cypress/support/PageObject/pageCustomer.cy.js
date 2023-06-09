import 'cypress-xpath';

class pageCustomer {
    menuPelanggan = ':nth-child(9) > .css-ewi1jp'
    tambah = '.css-1piskbq'
    nama = '#nama'
    alamat = '#alamat'
    keterangan = '#keterangan'
    simpan = '.chakra-button'
    message = '#chakra-toast-manager-top-right'
    alert = '.chakra-alert'

    clickPelanggan() {
        cy.get(this.menuPelanggan).click()
    }

    clickTambah() {
        cy.get(this.tambah).click()
    }

    inputNama(nama) {
        cy.get(this.nama).clear()
        cy.input(this.nama,nama)
    }

    inputAlamat(alamat) {
        cy.get(this.alamat).clear()
        cy.input(this.alamat,alamat)
    }

    inputKeterangan(keterangan) {
        cy.get(this.keterangan).clear()
        cy.input(this.keterangan,keterangan)
    }

    clickSimpan() {
        cy.get(this.simpan).click()
    }

    checkMessage() {
        cy.get(this.message).should('be.visible')
    }

    checkAlertEmtyName() {
        cy.get(this.alert).should('have.text','"name" is not allowed to be empty')
    }

    checkInvalidFormatNoHp() {
        cy.get(this.alert).should('have.text','"phone" must be a number')
    }

}
export default pageCustomer