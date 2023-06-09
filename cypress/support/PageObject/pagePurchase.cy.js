class pageSales {
    sales = '[href="/purchases"] > .css-ewi1jp'
    tambah = '.chakra-button'
    produk = '.css-1xhj18k > .chakra-button'
    row1 = 'tbody.css-0 > :nth-child(1) > :nth-child(1)'
    row2 = 'tbody.css-0 > :nth-child(2) > :nth-child(1)'
    catatan = '.chakra-textarea'
    simpan = '.css-0 > .chakra-button'
    message = '#chakra-toast-manager-top-right'
    search = '.css-cipbx3 > .chakra-input__group > .chakra-input'

    clickSales(){
        cy.get(this.sales).click()
    }

    clickTambah(){
        cy.get(this.tambah).click()
    }

    clickProduk(){
        cy.get(this.produk).click()
    }

    clickRow1(){
        cy.get(this.row1).click({force:true})
    }

    clickRow2(){
        cy.get(this.row2).click({force:true})
    }

    clickSimpan(){
        cy.get(this.simpan).click()
    }

    inputCatatan(catatan){
        cy.input(this.catatan,catatan)
    }

    checkMessage(){
        cy.get(this.message).should('be.visible')
    }

    checkMessageEmpty(){
        cy.get(this.message).should('have.text','erroritem produk kosong')
    }

    checkMessageError(){
        cy.get(this.message).should('have.text','error"invoice" is not allowed to be empty')
    }

    inputSearch(search){
        cy.input(this.search, search)
    }

}
export default pageSales