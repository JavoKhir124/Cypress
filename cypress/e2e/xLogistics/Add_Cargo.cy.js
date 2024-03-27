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
        addCargoBtn.click_Cargo_Type_Btn();

        cy.get('[class="styles_options__uIM1g"]').scrollTo('bottom').should('be.visible');
        
        addCargoBtn.select_Cargo_Type();

        addCargoBtn.enter_Cargo_Is_Weight();

        addCargoBtn.enter_Cargo_Is_Cubic_Meter();
        cy.wait(1000);

        // Add settings cargo
        addCargoBtn.add_packaging_And_Quantity();
        cy.wait(1000);

        addCargoBtn.add_Dimensions_And_Diameter();
        cy.wait(1000);

        addCargoBtn.click_Pakaging_Dropdown();
        cy.wait(1000);

        addCargoBtn.select_Pakaging();
        cy.wait(1000);

        addCargoBtn.enter_Pakaging_Quantity();
        cy.wait(1000);
        
        // Enter package size
       addCargoBtn.enter_Package_Size();
       cy.wait(1000);

       addCargoBtn.enter_Package_Diameter();
       cy.wait(1000);

       addCargoBtn.click_Package_Checkbox_1();
       cy.wait(1000);

       addCargoBtn.click_Package_Checkbox_2();
       cy.wait(1000);

       addCargoBtn.click_Package_Checkbox_3();
       cy.wait(1000);
       

      //  Select cargo is data by calendar
       addCargoBtn.click_Calendar_Btn();
       cy.wait(1000);
      
       addCargoBtn.select_Date_Cargo();
       cy.wait(1000);
       
      

        // Add address
        addCargoBtn.click_Address_Cargo();
        cy.wait(1000);

        cy.get('.styles_options__uIM1g').scrollTo('bottom');
        
        addCargoBtn.select_Cargo_Loading_Address();
        cy.wait(1000);

       addCargoBtn.click_Cargo_Loading_Address_By_Map_Btn();
        cy.wait(1000);

        cy.get('.ymaps-2-1-79-events-pane').should('be.visible')
        cy.wait(1000);

        addCargoBtn.click_Yandex_Modal_Save_Btn()
        cy.wait(1000);

        addCargoBtn.enter_The_Cargo_Address_Manually_For_Loading();
        cy.wait(1000);

        
        
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

      // Add transport
      addCargoBtn.click_Add_Car_List_Btn();

      addCargoBtn.select_Car_For_Cargo();
      
      addCargoBtn.enter_Number_Of_Cars();
      
      addCargoBtn.select_Loading_Type();

      addCargoBtn.click_Add_Parameters_To_TheCar_1();

      addCargoBtn.click_Add_Parameters_To_TheCar_2();

      addCargoBtn.check_Add_Parameters_Of_Cars();

      addCargoBtn.enter_Number_Belts();

      // Add bids
      
      addCargoBtn.click_No_Haggling_Btn();

      addCargoBtn.click_Request_Btn();

      addCargoBtn.click_Negotiable_Btn();

      // select the money type 
      // addCargoBtn.click_Money_Type_Btn();

      // addCargoBtn.click_Money_Type_Rubl();
     
      // Enter the Cargo is amount
      addCargoBtn.enter_Suggested_Amount();

      addCargoBtn.enter_Prepayment_Amount();

      cy.wait(2000); 

   

     // Select payment type
    addCargoBtn.click_Payment_Type_Dropdown_Btn();
    
    addCargoBtn.select_Payment_Type_Transfer();

    addCargoBtn.enter_Payment_In_Number_Of_Days();

    addCargoBtn.click_Payment_Of_Fuel_Btn();

    addCargoBtn.click_Payment_Upon_Unloading_Hides_Payment_Via_Btn();

    addCargoBtn.enter_Payment_Of_Fuel_Procent();

    addCargoBtn.click_Payment_Of_Fuel_Checkbox_btn();

    addCargoBtn.click_Payment_Upon_Unloading_Hides_Payment_Via_Checkbox_Btn();

    addCargoBtn.click_Direct_Contract_checkbox_Btn();

    // Add customer is phone number
    cy.wait(1000);
    
    addCargoBtn.add_Customer_Is_Number();
     
    // Add comment for driver
    addCargoBtn.add_Comment_For_Driver();

    // Click Publish button
    addCargoBtn.click_Publish_Btn();
    

    });

});