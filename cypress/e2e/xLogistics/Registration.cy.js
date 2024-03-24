describe('xLogistics', () => {
    
    it('User registration with correct information', () => {
        
        cy.viewport(1400, 811);
        cy.visit("https://xlogistic.ucode.run/");
        cy.location('protocol').should('eq', 'https:');
        cy.wait(2000);

        cy.get('.styles_registerLink__8mtgG').click();
        cy.wait(2000);

        cy.get('[class="chakra-button css-pajp60"]').click();
        cy.wait(2000);
        cy.get('input[name=phone]').click()
          .type('+998931112211');
        // Enter a correct phone number
          
        cy.wait(2000);
        cy.get('.css-132ow89').click();

        cy.get('.vi').click()
          .type('111111');
        // Enter a correct OTP code 

        cy.wait(2000);
        cy.get('.css-ab10ab').click();


        // Profile activity (dropdown).
        cy.get('[name="clientType"] > .styles_controlWrap__KbfRu > .styles_control__HmD3c').click();
        cy.wait(2000);      
          cy.get('.styles_options__uIM1g > :nth-child(1)').click();
        //   cy.get('.styles_options__uIM1g > :nth-child(2)').click();

        // Select company (dropdown).
        cy.get('[name="company"] > .styles_controlWrap__KbfRu > .styles_control__HmD3c').click();
        cy.wait(2000);
          cy.get('.styles_options__uIM1g > :nth-child(1)').click();
          // cy.get('.styles_options__uIM1g > :nth-child(2)').click()
          // cy.get('.styles_options__uIM1g > :nth-child(3)').click()

        // Enter user name.
        cy.get('#fullName').type('Mohirtest');
        
        // Enter user email.
        cy.get('#email').type('mohir.test@udevs.io');

        // Enter user lgin.
        cy.get('#login').type('MohirTest');

        // Enter user password (password should be min. 8 symbol).
        cy.get('#password').type('Qa12345!');

        // Press to checkbox 
        cy.get('[class="styles_checkbox__I9TA3"]').click();

        // Click confirm button
        cy.get('[class="chakra-button css-132ow89"]').click();


    });


});