export class LoginPage {

    //#region actions

    navigate() {
        cy.visit('/')
        cy.get('.layoutToolbarPadding').contains('Hello, Sign in').click()
    }

    enterEmail(email) {
        cy.get('form').within(($form) => {
            cy.contains('Sign-In').should('be.visible')

            if (email !== '')
                cy.get('#ap_email', { timeout: 2000 }).should('be.visible').type(email)

            cy.get('input[type="submit"]').click()
        })

        return this
    }

    enterPassword(password) {
        cy.get('form').within(($form) => {

            if (password !== '')
                cy.get('#ap_password', { timeout: 2000 }).should('be.visible').type(password)

            cy.get('input[type="submit"]').click()
        })

        return this
    }

    //#endregion

    //#region verify

    verifyLoginSuccess() {
        cy.contains('Authentication required', { timeout: 5000 }).should('be.visible')

        // TO-DO: Not implement OTP Authorization yet, so STOP here.
    }

    verifyEmptyEmail() {
        cy.contains('Enter your email or mobile phone number', { timeout: 5000 }).should('be.visible')
    }

    verifyInvalidEmail() {
        cy.contains('We cannot find an account with that email address', { timeout: 5000 }).should('be.visible')
    }

    verifyEmptyPassword() {
        cy.contains('Enter your password', { timeout: 5000 }).should('be.visible')
    }

    verifyIncorrectPassword() {
        cy.contains('Your password is incorrect', { timeout: 5000 }).should('be.visible')
    }

    //#endregion
}