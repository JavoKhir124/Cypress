describe('Unsplash', () => {
    


    // Foydalauvchi telefon raqami orqali systemga login qilishi
    it('User logs in with correct otp code via phone number.', () => {
        
        cy.viewport(1400, 811);
        cy.visit("https://unsplash.com/");
        cy.location('protocol').should('eq', 'https:');
        cy.wait(2000);

        cy.get('.cLLOA').click();
        cy.wait(2000);
        cy.get('.qXy59').click();
        
        
        
    });

});