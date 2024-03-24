class Add_Cargo {

    click_Add_Cargo_btn() {
        cy.get(':nth-child(2) > .styles_itemLink__G5ymH')
          .click();
    }

    click_Cargo_Type_Btn() {
        cy.get('.css-1oes8du > .styles_dropdown__0B9o7 > .styles_controlWrap__KbfRu > .styles_control__HmD3c')
          .click();
    }

    select_Cargo_Type() {
        cy.get('.styles_options__uIM1g > :nth-child(9)')
          .click();
    }

    enter_Cargo_Is_Weight() {
        cy.get('.css-1oes8du > :nth-child(2) > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
          .click()
          .type('100');
    }
    // Add cargo cubic meter
    enter_Cargo_Is_Cubic_Meter() {
        cy.get(':nth-child(3) > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
          .click()
          .type('200');
    }
    // Add packaging and quantity
    add_packaging_And_Quantity() {
        cy.get('.css-1mpxhp8 > :nth-child(1)')
          .click();
    }
    // Add desmension and diameter
    add_Dimensions_And_Diameter() {
        cy.get('.css-1mpxhp8 > .chakra-button')
          .click();
    }
    // Click pacakging button
    click_Pakaging_Dropdown() {
        cy.get('.css-qnzh05 > .styles_dropdown__0B9o7 > .styles_controlWrap__KbfRu > .styles_control__HmD3c')
          .click()
        //   .should('be.visible');
    }
    // Select pakaging 
    select_Pakaging() {
        cy.get('.styles_options__uIM1g > :nth-child(1)')
          .click()
          .should('not.exist');
    }
    // Enter quantity of pakaging
    enter_Pakaging_Quantity() {
        cy.get('.css-qnzh05 > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
          .type('1000')
          .should(($input) => {
            const value = $input.val();
            expect(value).not.to.equal('ddc1000');
          });        
    }
    // Enter package size
    enter_Package_Size() {
        cy.get('.css-eziozn > :nth-child(1) > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
          .type('10')
          .invoke('val').then(value => {
            expect(parseInt(value)).to.be.a('number');
          }); 
        cy.get('.css-eziozn > :nth-child(2) > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
          .type('20')
          .invoke('val').then(value => {
            expect(parseInt(value)).to.be.a('number');
          }); 
        cy.get('.css-eziozn > :nth-child(3) > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
          .type('30')
          .invoke('val').then(value => {
            expect(parseInt(value)).to.be.a('number');
          }); 
    }
    //Enter packege diameter
    enter_Package_Diameter() {
        cy.get(':nth-child(4) > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
        .type('40')
        .invoke('val').then(value => {
            expect(parseInt(value)).to.be.a('number');
          });
    }
    // Click package checkbox
    click_Package_Checkbox_1() {
        cy.get('.css-eziozn > :nth-child(2) > .styles_checkboxLabel__CWrzt > .styles_checkbox__I9TA3')
          .click()
          .should('exist');
    }
    click_Package_Checkbox_2() {
        cy.get(':nth-child(3) > .styles_checkboxLabel__CWrzt > .styles_checkbox__I9TA3')
          .click()
          .should('exist');
    }
    click_Package_Checkbox_3() {
        cy.get(':nth-child(1) > .styles_checkboxLabel__CWrzt > .styles_checkbox__I9TA3')
          .click()
          .should('exist');
    }
    // Click the calendar button
    click_Calendar_Btn() {
        cy.get('.styles_dateInputInner__qcvRb')
          .click()
          .should('be.visible');
    }
     // Select the date of cargo
    select_Date_Cargo() {
        cy.get('.react-datepicker__day--031 > .react-datepicker__day-text')
          .click()
          .invoke('val').then(value => {
            expect(parseInt(value)).to.be.a('number');
          });
        cy.get(':nth-child(4) > .react-datepicker__month > :nth-child(3) > .react-datepicker__day--015')
          .click()
          .invoke('val').then(value => {
            expect(parseInt(value)).to.be.a('number');
          });
    }
    // Add the cargo address
    click_Address_Cargo() {
        cy.get('.styles_formContent__G8RC9 > .styles_fields__6_6rA > .styles_fieldsWrapper__SSdBc > .styles_field__3KJrM > .styles_dropdown__0B9o7 > .styles_controlWrap__KbfRu > .styles_control__HmD3c')
          .click()
          .should('be.visible');
    }
    // Select the cargo loading address
    select_Cargo_Loading_Address() {
        cy.get('.styles_options__uIM1g > :nth-child(28)')
          .click()
    }
    // Click the cargo loading address
    click_Cargo_Loading_Address_By_Map_Btn() {
        cy.get('.styles_formContent__G8RC9 > .styles_fields__6_6rA > .styles_fieldsWrapper__SSdBc > .styles_field__3KJrM > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
          .click()
    }
    // Click the yandex pop-up save button
    click_Yandex_Modal_Save_Btn() {
        cy.get('.css-132ow89')
          .click()
    }
    // Enter the cargo address manually for loading
    enter_The_Cargo_Address_Manually_For_Loading() {
        cy.get('.styles_formContent__G8RC9 > .styles_fields__6_6rA > .styles_fieldsWrapper__SSdBc > .styles_field__3KJrM > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
          .wait(500)
          .type('Ташкент, район,', { delay: 50 })
          .wait(500)
          .type(' Мирзо-Улугбекский', { delay: 50 })
          .wait(500)
          .type(' махалля', { delay: 50 })
          .wait(500)
          .type(' Мирзо-Улугбекский', { delay: 50 })
          .should('have.value', 'Ташкент, район, Мирзо-Улугбекский махалля Мирзо-Улугбекский');
    }
    // Add the waypoint to cargo
    click_Add_Waypoint_To_Cargo() {
      cy.get('.styles_fieldActionsButtons__KWOhM > :nth-child(1)')
        .click()
        .wait(1000); 

      cy.get('.styles_fieldActionsButtons__KWOhM > :nth-child(3)')
        .click()
        .wait(1000);
      cy.get('.styles_fieldActionsButtons__KWOhM > :nth-child(4)')
        .click();
    }
    // Delete the waypoint to cargo
    click_Delete_Waypoint_To_Cargo_Btn() {
        cy.get('.styles_formContent__G8RC9 > .styles_fields__6_6rA > :nth-child(2) > .styles_fieldsWrapperActions__WNt7F > .chakra-button').click()
          .wait(1000);
      cy.get(':nth-child(3) > .styles_fieldsWrapperActions__WNt7F > .chakra-button')
          .click()
          .wait(1000);
    }
    // Add the waypoint when loading cargo
    click_Add_Waypoint_To_Cargo_Btn() {
        cy.get(':nth-child(2) > .styles_field__3KJrM > .styles_dropdown__0B9o7 > .styles_controlWrap__KbfRu > .styles_control__HmD3c')
          .click()
          .wait(1000);
    }
    // Select the waypoint when loading cargo address
    select_Add_Waypoint_When_Loading_Cargo_Address() {
        cy.get('.styles_options__uIM1g > :nth-child(2)')
          .click(); 
    }
    // Click the Waypoint cargo address by map
    click_Cargo_Waypoint_Address_By_Map_Btn() {
        cy.get('.styles_formContent__G8RC9 > .styles_fields__6_6rA > :nth-child(2) > .styles_field__3KJrM > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
          .click()
          .wait(1000);
    }
    // Click the waypoint address save button
    click_Waypoint_Cargo_Save_Btn() {
        cy.get('.css-132ow89')
          .click()
    }
    // Enter the cargo address manually for waypoint
    enter_Cargo_Address_Waypoint() {
        cy.get('.styles_formContent__G8RC9 > .styles_fields__6_6rA > :nth-child(2) > .styles_field__3KJrM > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
        .wait(500)
        .type('Сицилия,', { delay: 50 })
        .wait(500)
        .type(' Палермо, Алия', { delay: 50 })
        .should('have.value', 'Сицилия, Палермо, Алия');
    }
    // Add address unloading
    click_Add_Address_Unloading() {
        cy.get(':nth-child(3) > .styles_fieldsWrapper__SSdBc > .styles_field__3KJrM > .styles_dropdown__0B9o7 > .styles_controlWrap__KbfRu > .styles_control__HmD3c > .styles_placeholder__sIOE8')
          .click();
    }
    // Select the address unloading
    select_Add_Address_Unloading() {
        cy.get('.styles_options__uIM1g > :nth-child(5)')
          .click();
    }
    // Click the add address unloading by yandex card
    click_Add_Address_Unloading_By_Yandex_Btn() {
        cy.get(':nth-child(3) > .styles_fieldsWrapper__SSdBc > .styles_field__3KJrM > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
          .click()
          .wait(1000);
    }
    // Click Add address unloading save button
    click_Add_Address_Unloading_Save_Btn () {
        cy.get('.css-132ow89')
          .click();
    }
    // Enter the cargo address manually for unloading
    click_Add_Address_Manuality_For_Unloading() {
        cy.get(':nth-child(3) > .styles_fieldsWrapper__SSdBc > .styles_field__3KJrM > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
          .wait(500)
          .type('уезд Йыгевамаа, волость Йыгева,', { delay: 50 })
          .wait(500)
          .type(' деревня Ронивере', { delay: 50 })
          .should('have.value', 'уезд Йыгевамаа, волость Йыгева, деревня Ронивере');
    }
    // Check round trip
    click_Round_Trip_Checkbox() {
        cy.get('.styles_checkboxInner__9EJJ8 > span')
          .click()
          .should('exist');
    }

}

export default Add_Cargo