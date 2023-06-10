class pageSales {

    penjualan = '[href="/sales"] > .css-ewi1jp'
    tambah = '.chakra-button'
    pelanggan = '#pelanggan'
    tabelPelanggan = '#chakra-modal--body-30 > .chakra-table > tbody.css-0 > :nth-child(1) > :nth-child(1)'
    produk = 'tbody.css-0 > :nth-child(1) > :nth-child(1)'
    bayarButton = '.css-n4rzf0 > .chakra-button'
    inputBayar = '.css-rltemf > .chakra-input'
    catatan = '.chakra-textarea'
    diskon= '#diskon'
    message = '#chakra-toast-manager-top-right'
    produk = '.css-1xhj18k > .chakra-button'
    tabelProduk1 = 'tbody.css-0 > :nth-child(1) > :nth-child(1)'
    tabelProduk2 = 'tbody.css-0 > :nth-child(2) > :nth-child(1)'

    clickPenjualan(){
        cy.get(this.penjualan).click()
    }

    clickTambah() {
        cy.get(this.tambah).click()
    }

    clickPelanggan() {
        cy.get(this.pelanggan).click()
    }

    clickTabelPelanggan() {
        cy.get(this.tabelPelanggan).click({force:true})
    }

    clickProduk() {
        cy.get(this.produk).click()
    }

    clickTabelProduk1(){
        cy.get(this.tabelProduk1).click({force:true})
    }

    clickTabelProduk2(){
        cy.get(this.tabelProduk2).click({force:true})
    }

    bayar(inputBayar){
        cy.get(this.inputBayar).clear()
        cy.input(this.inputBayar,inputBayar)
    }

    clickBayar(){
        cy.get(this.bayarButton).click()
    }

    inputDiskon(diskon){
        cy.get(this.diskon).clear()
        cy.input(this.diskon, diskon)
    }

    inputCatatan(catatan){
        cy.input(this.catatan, catatan)
    }

    checkMessage(){
        cy.get(this.message).should('be.visible')
    }

    checkMessageErr(){
        cy.get(':nth-child(2) > .chakra-heading').should('be.visible')
    }
}
export default pageSales