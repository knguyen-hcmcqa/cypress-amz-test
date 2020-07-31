/// <reference types="cypress" />

import { LoginPage } from "../../page-objects/login-page";

describe('Login Action', () => {
    const loginPage = new LoginPage()

    beforeEach(() => {
        loginPage.navigate()
    })

    it('Successful Login with Valid Credentials', () => {
        loginPage.enterEmail('qahcmc@outlook.com')
            .enterPassword('qa@hcmc123')
            .verifyLoginSuccess()
    })

    it('Show Error Message when empty Email', () => {
        loginPage.enterEmail('')
            .verifyEmptyEmail()
    })

    it('Show Error Message while using Invalid/Not-registered Credentials', () => {
        loginPage.enterEmail('invalid-email-address@outlook.com')
            .verifyInvalidEmail()
    })

    it('Show Error Message when empty Password', () => {
        loginPage.enterEmail('qahcmc@outlook.com')
            .enterPassword('')
            .verifyEmptyPassword()
    })

    it('Show Error Message while using Inccorect Password', () => {
        loginPage.enterEmail('qahcmc@outlook.com')
            .enterPassword('incorrect-password')
            .verifyIncorrectPassword()
    })

})