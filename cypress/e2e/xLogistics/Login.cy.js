import Login from "../xLogistic_POM/Login";

describe('xLogistics', () => {

    const login = new Login()
    const UserName = 'MohirTest'
    const Password = 'Qa12345!'

     it('User can login with correct data', () => {
        
        cy.viewport(1400, 811);
        cy.visit("https://xlogistic.ucode.run/");
        cy.location('protocol').should('eq', 'https:');
        cy.wait(2000);

        cy.get('.styles_registerLink__8mtgG').click();
        cy.wait(2000);

        cy.get('[class="chakra-button css-l7msz4"]').click();
        cy.wait(2000);

        cy.get('#username').type(UserName);
        cy.get('#password').type(Password);

        cy.get('[class="styles_checkbox__I9TA3"]').click();
        cy.get('[class="chakra-button css-l7msz4"]').click();

    });


});