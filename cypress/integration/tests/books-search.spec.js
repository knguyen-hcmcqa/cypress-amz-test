/// <reference types="cypress" />

import { BooksSearchPage } from "../../page-objects/books-search-page";

describe('Books Search Action', () => {
    const searchPage = new BooksSearchPage()

    beforeEach(() => {
        searchPage.navigate()
    })

    it('The Result displays exactly 16 items on each page', () => {
        searchPage.enterKeywords('apple')
            .selectLanguage('English')
            .search()
            .verifyResultDisplaysItemsOnEachPage(16)

        searchPage.gotoNextPage()
            .verifyResultDisplaysItemsOnEachPage(16)
    })

    it('The Result is sorted by ​Publication date', () => {
        searchPage.enterKeywords('apple')
            .selectLanguage('English')
            .search()
            .sortBy('Publication Date')
            .verifyResultSortedByDate()
    })
})