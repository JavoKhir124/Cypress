//--------Link to POM folder----------//
import Registration_Negative from "../POM/registr_negative";


// -----------Verables-----------//

const User_Name = 'Javohir';
const User_PhoneNumber = '93 143 18 17';
const User_PhoneNumber_Negative = '  ';
const User_Name_Negative = '  '


describe('UZD+', () => {

    const registration_negative = new Registration_Negative

    //==============Negative Name=============//


    it('Registration_Negative_Case', () => {

        cy.viewport(1400, 811); 

        cy.visit("https://uzdplus.uz/registration");
        cy.location('protocol').should('eq', 'https:');
        cy.wait(2000);
        registration_negative.phone_Number_Field().type(User_PhoneNumber);
        registration_negative.login_Btn();
        registration_negative.check_Btn();
        registration_negative.login_Btn();
        cy.wait(2000);

        cy.get('#field-0').type("0");   
        cy.get('#field-1').type("0");   
        cy.get('#field-2').type("0");   
        cy.get('#field-3').type("0");  
        cy.get('#field-4').type("0");  
        cy.get('#field-5').type("0");
        cy.wait(2000);

        registration_negative.user_Name().type(User_Name_Negative);
        registration_negative.login_Button();
        registration_negative.select_Category();
        registration_negative.login_Confirm_Btn();

    });

    //===============Negative phone number=================//


    it('Registration_Negative_Case', () => {

        cy.viewport(1400, 811); 

        cy.visit("https://uzdplus.uz/registration");
        cy.location('protocol').should('eq', 'https:');
        cy.wait(2000);
        registration_negative.phone_Number_Field().type(User_PhoneNumber_Negative);
        registration_negative.login_Btn();
        registration_negative.check_Btn();
        registration_negative.login_Btn();
        cy.wait(2000);

        cy.get('#field-0').type("0");   
        cy.get('#field-1').type("0");   
        cy.get('#field-2').type("0");   
        cy.get('#field-3').type("0");  
        cy.get('#field-4').type("0");  
        cy.get('#field-5').type("0");
        cy.wait(2000);

        registration_negative.user_Name().type(User_Name_Negative);
        registration_negative.login_Button();
        registration_negative.select_Category();
        registration_negative.login_Confirm_Btn();

    });

    //==================Wrong OTP code=================//

    it('Registration_Negative_Case', () => {

        cy.viewport(1400, 811); 

        cy.visit("https://uzdplus.uz/registration");
        cy.location('protocol').should('eq', 'https:');
        cy.wait(2000);
        registration_negative.phone_Number_Field().type(User_PhoneNumber);
        registration_negative.login_Btn();
        cy.wait(2000);
        registration_negative.check_Btn();
        cy.wait(2000);
        registration_negative.login_Btn();
        cy.wait(2000);

        cy.get('#field-0').type("0");   
        cy.get('#field-1').type("0");   
        cy.get('#field-2').type("0");   
        cy.get('#field-3').type("0");  
        cy.get('#field-4').type("0");  
        cy.get('#field-5').type("0");
        cy.wait(2000);

        registration_negative.user_Name().type(User_Name);
        registration_negative.login_Button();
        registration_negative.select_Category();
        registration_negative.login_Confirm_Btn();

    });

});