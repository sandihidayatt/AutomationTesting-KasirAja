import 'cypress-xpath';
class pageCategory {
    category = '[href="/categories"] > .css-ewi1jp'
    tambah = '.css-1piskbq'
    nama = '#nama'
    deskripsi = '#deskripsi'
    simpan = '.chakra-button'
    message = '#chakra-toast-manager-top-right'
    emptyName = '.chakra-alert'
    search = '.chakra-input'
    tigaTitik = '/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/button[1]'
    ubah = '/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/a[1]'
    hapus = '/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/button[1]'
    delete = '.css-n45e6f'

    clickCategory(){
        cy.get(this.category).click()
    }

    clickTambah(){
        cy.get(this.tambah).click()
    }

    inputNama(nama){
        cy.get(this.nama).clear()
        cy.input(this.nama,nama)
    }

    inputDeskripsi(deskripsi){
        cy.get(this.deskripsi).clear()
        cy.input(this.deskripsi,deskripsi)
    }

    clickSimpan(){
        cy.get(this.simpan).click()
    }

    checkMessage(){
        cy.get(this.message).should('be.visible') //message
    }

    checkEmptyName(){
        cy.get(this.emptyName).should('have.text','"name" is not allowed to be empty')
    }

    inputSearch(search){
        cy.input(this.search,search)
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

export default pageCategory