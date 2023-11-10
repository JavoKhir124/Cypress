class Registration_Negative {

    phone_Number_Field() {
        return cy.get('.Index_input__U5hFk').click();
    }

    login_Btn() {
        return cy.get('.MuiTypography-root').click();
    }

    check_Btn() {
        return cy.get('.border').click();
    }
    
    user_Name() {
        return cy.get('.Index_input__U5hFk').click();
    }

    login_Button() {
        return cy.get('.Index_buttonsubmit__2rE0S').click();
    }

    select_Category() {
               cy.get('.style_list__28x2x > :nth-child(1)').click();
               cy.get('.style_list__28x2x > :nth-child(2)').click();
               cy.get('.style_list__28x2x > :nth-child(3)').click();
               cy.get('.style_list__28x2x > :nth-child(4)').click();
        return cy.get('.style_list__28x2x > :nth-child(5)').click();
    }

    login_Confirm_Btn() {
        return cy.get('.fixed > .w-full').click();
    }


}
export default Registration_Negative
