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
    // Click add car list button
    click_Add_Car_List_Btn() {
      cy.get('.css-1kmgt9b > .styles_dropdown__0B9o7 > .styles_controlWrap__KbfRu > .styles_control__HmD3c')
        .click()
        .should('be.visible')
        .wait(1000);
    }
    // Select Car for cargo
    select_Car_For_Cargo() {
      cy.get('.styles_options__uIM1g > :nth-child(3)')
        .click();
    }
    // Enter the number number of car
    enter_Number_Of_Cars() {
      cy.get('.styles_inputWrapper__iW8LS')
        .type('12ja');
    }
    // Select type loading 
    select_Loading_Type() {
      cy.get(':nth-child(2) > .styles_checkboxText__j3uZz')
        .click({ multiple: true })
        .wait(500);
    }
    // Add parameters to the car
    click_Add_Parameters_To_TheCar_1() {
      cy.get(':nth-child(3) > .css-1rsmmrh > :nth-child(1)')
        .click();
    }
    click_Add_Parameters_To_TheCar_2() {
      cy.get(':nth-child(3) > .css-1rsmmrh > :nth-child(2)')
        .click();
    }
    // Check added car is parameters
    check_Add_Parameters_Of_Cars() {
      cy.get('.css-186mqrt > :nth-child(1)').click()
      cy.get('.css-186mqrt > :nth-child(2)').click()
      cy.get('.css-186mqrt > :nth-child(3)').click()
    }
    // Enter the number of belts 
    enter_Number_Belts() {
      cy.get('#remains')
        .type('dakj12');
    }
    // Click no haggling button
    click_No_Haggling_Btn() {
      cy.get(':nth-child(2) > .styles_radioLabel__9zylw')
        .click()
        .wait(1500);
    }
    // Click request button
    click_Request_Btn() {
      cy.get(':nth-child(3) > .styles_radioLabel__9zylw')
        .click()
        .wait(1500);
    }
    // Click negotiable button
    click_Negotiable_Btn() {
      cy.get(':nth-child(1) > .styles_radioLabel__9zylw')
        .click()
        .wait(1500);
    }
    // Enter Suggested amount 
    enter_Suggested_Amount () {
      cy.get('.css-180ytxh > :nth-child(2) > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
        .type('ahdjd1000020');
    }
    // Enter Prepayment amount
    enter_Prepayment_Amount() {
      cy.get('.css-180ytxh > :nth-child(3) > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
        .type('ahdjd10000');
    }
    // Click the money type button 
    click_Money_Type_Btn() {
      cy.get('.css-180ytxh > :nth-child(2) > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_additionalItem__KHoZU >.styles_additionalItemContent__KWDkp > .styles_additionalItemLabelWrapper__jmEqJ > :nth-child(1)')
        .click()
        .wait(500);
    }
    // Click the type money button dollar
    click_Money_Type_Rubl() {
      cy.get(':nth-child(2) > .styles_additionalItemOptionLabel__CerVF > span')
        .click();
    }
     // Click the type money button dollar
     click_Money_Type_Dollar() {
      cy.get(':nth-child(3) > .styles_additionalItemOptionLabel__CerVF > span')
        .click();
    }
     // Click the type money button Sum
     click_Money_Type_Sum() {
      cy.get(':nth-child(4) > .styles_additionalItemOptionLabel__CerVF > span')
        .click();
    }
    // Click Payment type dropdown button
    click_Payment_Type_Dropdown_Btn() {
      cy.get(':nth-child(5) > .styles_dropdown__0B9o7 > .styles_controlWrap__KbfRu > .styles_control__HmD3c')
        .click()
        .wait(1000);
    }
    // Select Payment type 
    select_Payment_Type_Transfer() {
      cy.get('.styles_options__uIM1g > :nth-child(1)')
        .click()
        .wait(1000);
    }
    // Payment in number of days
    enter_Payment_In_Number_Of_Days() {
      cy.get('.css-1phy807 > .css-1pkc2h9 > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
        .type('ajksda10')
        .wait(1000);
    }
    // Click the Prepayment of fuel button
    click_Payment_Of_Fuel_Btn() {
      cy.get('.css-lvc35n > .css-1rsmmrh > :nth-child(1)')
        .click()
        .wait(1000);
    }
    // Click the Payment upon unloading (hides payment via) button
    click_Payment_Upon_Unloading_Hides_Payment_Via_Btn() {
      cy.get('.css-lvc35n > .css-1rsmmrh > .chakra-button')
      .click()
      .wait(1000);
    }
    // Enter the payment of fuel procent
    enter_Payment_Of_Fuel_Procent() {
      cy.get('.css-idy3la > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
        .type('30');
    }
    // Click the Prepayment of fuel checkbox button
    click_Payment_Of_Fuel_Checkbox_btn() {
      cy.get('.css-idy3la > :nth-child(2) > .styles_checkboxText__j3uZz')
        .click();
    }
    // Click the Payment upon unloading (hides payment via) chekbox button
    click_Payment_Upon_Unloading_Hides_Payment_Via_Checkbox_Btn() {
      cy.get(':nth-child(3) > .styles_checkboxText__j3uZz')
        .click({ multiple: true });
    }
    // Click the I enter into an agreement with a carrier from my company button
    click_Direct_Contract_checkbox_Btn() {
      cy.get(':nth-child(4) > .css-idy3la > .styles_checkboxLabel__CWrzt > .styles_checkboxText__j3uZz')
        .click({ multiple: true });
    }
    // Add customer is phone number 
    add_Customer_Is_Number() {
      cy.get('.css-1h5qa64 > .css-1pkc2h9 >.styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii')
        .type('+998931431817')
        .wait(1000);
    }
    // Add comment for driver
    add_Comment_For_Driver() {
      cy.get('.chakra-textarea').type('This comment for driver')
        .wait(2000);
    }
    // Click publish button
    click_Publish_Btn() {
      cy.get('.css-ke6f4z > .chakra-button')
        .click();
    }




}

export default Add_Cargo