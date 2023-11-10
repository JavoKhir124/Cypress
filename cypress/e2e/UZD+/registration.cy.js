//--------Link to POM folder----------//
import Registration from "../POM/registration";


// -----------Verables-----------//
const User_PhoneNumber = '93 143 18 17';
const User_Name = 'Javohir';



describe('UZD+', () => {

    const registration = new Registration();

    //------------Registration---------------//


    it('Registration', () => {

        cy.viewport(1400, 811); 

        cy.visit("https://uzdplus.uz/registration");
        cy.location('protocol').should('eq', 'https:');
        cy.wait(2000);
        registration.phone_Number_Field().type(User_PhoneNumber);
        registration.login_Btn();
        cy.wait(2000);
        registration.check_Btn();
        cy.wait(2000);
        registration.login_Btn();
        cy.wait(2000);

        cy.get('#field-0').type("7");   
        cy.get('#field-1').type("0");   
        cy.get('#field-2').type("0");   
        cy.get('#field-3').type("5");  
        cy.get('#field-4').type("0");  
        cy.get('#field-5').type("0");
        cy.wait(2000);

        registration.user_Name().type(User_Name);
        registration.login_Button();
        registration.select_Category();
        registration.login_Confirm_Btn();

    });
       

});