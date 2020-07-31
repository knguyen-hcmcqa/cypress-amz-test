export class BooksSearchPage {

    //#region actions
    
    navigate() {
        cy.visit('/Advanced-Search-Books/b/?node=241582011')
        cy.title().should('include', 'Amazon.com: Advanced Search: Books')
        cy.wait(5000)
    }

    enterKeywords(keywords) {
        cy.get('form[action="/gp/search/ref=sr_adv_b/"]').within(() => {
            cy.get('input[name="field-keywords"]').should('be.visible').type(keywords)
        })

        return this
    }

    selectLanguage(language) {
        cy.get('form[action="/gp/search/ref=sr_adv_b/"]').within(() => {
            cy.get('select[name="field-language"]').should('be.visible').select(language)
        })

        return this
    }

    search() {
        cy.get('form[action="/gp/search/ref=sr_adv_b/"]').within(() => {
            cy.get('input[name="Adv-Srch-Books-Submit"]').click()
        })
        cy.wait(5000)

        return this
    }

    gotoNextPage() {
        cy.get('.s-result-list .a-last').click()
        cy.wait(5000)
        return this
    }

    sortBy(sortType) {
        cy.get('#a-autoid-0-announce').click()
        cy.get('ul[role="listbox"] li a').contains(sortType).click()
        cy.wait(5000)
        return this
    }

    //#endregion

    //#region verify

    verifyResultDisplaysItemsOnEachPage(count) {
        cy.get('span[cel_widget_id="MAIN-SEARCH_RESULTS"]').should('have.length', count)
    }

    verifyResultSortedByDate() {
        let arr_dates = []
        cy.get('span[cel_widget_id="MAIN-SEARCH_RESULTS"] span[class="a-size-base a-color-secondary a-text-normal"]')
            .each(($el) => {
                arr_dates.push($el.text())
            }).then(() => {
                let arr_sorted = Array.from(arr_dates).sort((a, b) => {
                    return Date.parse(b) - Date.parse(a)
                })

                expect(arr_sorted).to.deep.equal(arr_dates)
            })

    }

    //#endregion


}