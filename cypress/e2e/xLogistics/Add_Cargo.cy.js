import Add_Cargo from "../xLogistic_POM/Add_Cargo";

describe('xLogistics', () => {

    const addCargoBtn = new Add_Cargo()

    
        beforeEach(() =>
    {
        cy.viewport(1400, 811);
        cy.visit("https://xlogistic.ucode.run/");
        cy.location('protocol').should('eq', 'https:');
        cy.wait(2000);

        cy.get('.styles_registerLink__8mtgG').click();
        cy.wait(2000);

        cy.get('[class="chakra-button css-l7msz4"]').click();
        cy.wait(2000);

        cy.get('#username').type('MohirTest');
        cy.get('#password').type('Qa12345!');

        cy.get('[class="styles_checkbox__I9TA3"]').click();
        cy.get('[class="chakra-button css-l7msz4"]').click();

    });


    it('Add cargo', () => {

        // Click add cargo button     
        addCargoBtn.click_Add_Cargo_btn();
        cy.wait(2000);

        // Cargo, For each car
        // addCargoBtn.click_Cargo_Type_Btn();

        // cy.get('[class="styles_options__uIM1g"]').scrollTo('bottom').should('be.visible');
        
      //   addCargoBtn.select_Cargo_Type();

      //   addCargoBtn.enter_Cargo_Is_Weight();

      //   addCargoBtn.enter_Cargo_Is_Cubic_Meter();
      //   cy.wait(1000);

      //   // Add settings cargo
      //   addCargoBtn.add_packaging_And_Quantity();
      //   cy.wait(1000);

      //   addCargoBtn.add_Dimensions_And_Diameter();
      //   cy.wait(1000);

      //   addCargoBtn.click_Pakaging_Dropdown();
      //   cy.wait(1000);

      //   addCargoBtn.select_Pakaging();
      //   cy.wait(1000);

      //   addCargoBtn.enter_Pakaging_Quantity();
      //   cy.wait(1000);
        
      //   // Enter package size
      //  addCargoBtn.enter_Package_Size();
      //  cy.wait(1000);

      //  addCargoBtn.enter_Package_Diameter();
      //  cy.wait(1000);

      //  addCargoBtn.click_Package_Checkbox_1();
      //  cy.wait(1000);

      //  addCargoBtn.click_Package_Checkbox_2();
      //  cy.wait(1000);

      //  addCargoBtn.click_Package_Checkbox_3();
      //  cy.wait(1000);
       

       // Select cargo is data by calendar
      //  addCargoBtn.click_Calendar_Btn();
      //  cy.wait(1000);
      
      //  addCargoBtn.select_Date_Cargo();
      //  cy.wait(1000);
       
      

        // Add address
      //   addCargoBtn.click_Address_Cargo();
      //   cy.wait(1000);

      //   cy.get('.styles_options__uIM1g').scrollTo('bottom');
        
      //   addCargoBtn.select_Cargo_Loading_Address();
      //   cy.wait(1000);

      //  addCargoBtn.click_Cargo_Loading_Address_By_Map_Btn();
      //   cy.wait(1000);

      //   cy.get('.ymaps-2-1-79-events-pane').should('be.visible')
      //   cy.wait(1000);

      //   addCargoBtn.click_Yandex_Modal_Save_Btn()
      //   cy.wait(1000);

      //   addCargoBtn.enter_The_Cargo_Address_Manually_For_Loading();
      //   cy.wait(1000);

        
        
      // Add waypoint
        addCargoBtn.click_Add_Waypoint_To_Cargo();
        cy.wait(1000);
      

      // Delete add waypoint
        addCargoBtn.click_Delete_Waypoint_To_Cargo_Btn();
        cy.wait(1000);
      
      // Add waypoint when loading cargo
        addCargoBtn.click_Add_Waypoint_To_Cargo_Btn();
        cy.wait(1000);

        cy.get('.styles_options__uIM1g').scrollTo('center');
        cy.wait(1000);
      
        addCargoBtn.select_Add_Waypoint_When_Loading_Cargo_Address();
        cy.wait(1000);

        addCargoBtn.click_Cargo_Waypoint_Address_By_Map_Btn();
        cy.wait(1000);

        cy.get('.ymaps-2-1-79-events-pane')
          .should('be.visible')
        
        addCargoBtn.click_Waypoint_Cargo_Save_Btn();  
        cy.wait(1000)   
        
        
      // Enter the cargo address manually for waypoint
       addCargoBtn.enter_Cargo_Address_Waypoint();


      // Add address unloading 
      addCargoBtn.click_Add_Address_Unloading();

      cy.get('.styles_options__uIM1g')
        .scrollTo('bottom')
        .wait(500);

      addCargoBtn.select_Add_Address_Unloading();

      addCargoBtn.click_Add_Address_Unloading_By_Yandex_Btn();

      cy.get('.ymaps-2-1-79-events-pane')
        .should('be.visible');
      
      addCargoBtn.click_Add_Address_Unloading_Save_Btn();
      cy.wait(1000)

      addCargoBtn.click_Add_Address_Manuality_For_Unloading();
      cy.wait(1000);

      addCargoBtn.click_Round_Trip_Checkbox();

    //   // // Add transport
    //   cy.get('.css-1kmgt9b > .styles_dropdown__0B9o7 > .styles_controlWrap__KbfRu > .styles_control__HmD3c').click()
    //     .wait(1000)
    //   cy.get('.styles_options__uIM1g > :nth-child(3)').click();
    //   cy.get('.styles_inputWrapper__iW8LS').type('5dwa2');
      
    //   cy.get('.styles_inputWrapper__iW8LS').type('12ja'); // Raqamlar yoziladi
    //   // cy.get('.styles_inputWrapper__iW8LS').should(($input) => {
    //   //   const value = $input.val(); // Input qiymatini olamiz
    //   //   if (value !== '') { // Agar qiymat mavjud bo'lsa
    //   //     expect(value).to.match(/^\d+$/); // Raqamlarni tekshiramiz
    //   //   }
    //   // });
      
    //   cy.get(':nth-child(2) > .styles_checkboxText__j3uZz').click({ multiple: true })
    //     .wait(500)
    //   cy.get(':nth-child(3) > .css-1rsmmrh > :nth-child(1)').click()
    //   cy.get(':nth-child(3) > .css-1rsmmrh > :nth-child(2)').click()

    //   cy.get('.css-186mqrt > :nth-child(1)').click()
    //   cy.get('.css-186mqrt > :nth-child(2)').click()
    //   cy.get('.css-186mqrt > :nth-child(3)').click()

    //   cy.get('#remains').type('dakj12')

    //   // Add bids
    //   cy.get(':nth-child(2) > .styles_radioLabel__9zylw').click()
    //     .wait(1500)
    //   cy.get(':nth-child(3) > .styles_radioLabel__9zylw').click()
    //     .wait(1500)
    //   cy.get(':nth-child(1) > .styles_radioLabel__9zylw').click()
    //     .wait(1500)

    //  cy.get('.css-180ytxh > :nth-child(2) > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii').type('ahdjd1000020');
    //  cy.get('.css-180ytxh > :nth-child(3) > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii').type('ahdjd10000');

    //  cy.wait(2000)
    //  // Select money type
    //  cy.get('.css-180ytxh > :nth-child(2) > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_additionalItem__KHoZU >.styles_additionalItemContent__KWDkp > .styles_additionalItemLabelWrapper__jmEqJ > :nth-child(1)').click()
    //   .wait(500)
    // //  cy.get(':nth-child(2) > .styles_additionalItemOptionLabel__CerVF > span').click()
    // //  cy.get('.css-180ytxh > :nth-child(2) > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_additionalItem__KHoZU >.styles_additionalItemContent__KWDkp > .styles_additionalItemLabelWrapper__jmEqJ > :nth-child(1)').click()
    // //   .wait(500)
    // //  cy.get(':nth-child(3) > .styles_additionalItemOptionLabel__CerVF > span').click() 
    // //  cy.get('.css-180ytxh > :nth-child(2) > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_additionalItem__KHoZU >.styles_additionalItemContent__KWDkp > .styles_additionalItemLabelWrapper__jmEqJ > :nth-child(1)').click()
    // //   .wait(500) 
    // //  cy.get(':nth-child(4) > .styles_additionalItemOptionLabel__CerVF > span').click()

    //  // Select payment type
    //  cy.get(':nth-child(5) > .styles_dropdown__0B9o7 > .styles_controlWrap__KbfRu > .styles_control__HmD3c').click()
    //    .wait(500)
    //  cy.get('.styles_options__uIM1g > :nth-child(1)').click()
    //    .wait(2000)
    //  cy.get('.css-1phy807 > .css-1pkc2h9 > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii').type('ajksda10')
    //    .wait(1000)
    //  cy.get('.css-lvc35n > .css-1rsmmrh > :nth-child(1)').click()
    //    .wait(1000)
    //  cy.get('.css-lvc35n > .css-1rsmmrh > .chakra-button').click()
    //    .wait(1000)  
     
    //  cy.get('.css-idy3la > .styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii').type('30')
    //  cy.get('.css-idy3la > :nth-child(2) > .styles_checkboxText__j3uZz').click()
    //  cy.get(':nth-child(3) > .styles_checkboxText__j3uZz').click({ multiple: true })
    //  cy.get(':nth-child(4) > .css-idy3la > .styles_checkboxLabel__CWrzt > .styles_checkboxText__j3uZz').click({ multiple: true })

    //  // Add customer is phone number
    //  cy.wait(1000);
    //  cy.get('.css-1h5qa64 > .css-1pkc2h9 >.styles_field__sHsQk > .styles_contentWrapper__aMUwP > .styles_inputWrapper__EC_7t > .styles_fieldInput__ngeii').type('+998931431817')
    //    .wait(1000)
     
    //  // Add comment for driver
    //  cy.get('.chakra-textarea').type('This comment for driver')
    //    .wait(2000)

    //  cy.get('.css-ke6f4z > .chakra-button').click()
     
        


    });

});