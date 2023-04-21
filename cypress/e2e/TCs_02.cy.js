import Homepage_TSc_02 from "../support/Thesouledstore/Homepage.cy";

describe('', () => {
  const Homepage =  new Homepage_TSc_02();

//   To verify if the Contact Button is visible on homepage
    it('Test Case 09', () => {
        Homepage.Contact_Button_on_Homepage_TC_09();
    });


    // To validate if the Contact button is click able
    it('Test Case 10', () => {
        Homepage.Contact_Button_on_Homepage_TC_10();
    });


    // To verify if the Track Order Button is visible on homepage
    it('Test Case 11', () => {
        Homepage.Track_Order_Button_on_Homepage_TC_11();
    });


    // To validate if the Track Order button is click able
    it('Test Case 12', () => {
        Homepage.Track_Order_Button_on_Homepage_TC_12();
    });


    // To verify if the Download app Button is visible on homepage
    it('Test Case 13', () => {
        Homepage.Download_app_Button_on_Homepage_TC_13();
    });



    // To validate if the Download app button is click able
    it('Test Case 14', () => {
        Homepage.Download_app_Button_on_Homepage_TC_14();
    });



    // To verify if the Women Button is visible on homepage
    it('Test Case 15', () => {
       Homepage.Women_Button_on_Homepage_TC_15();
    });



    // To validate if the Women button is click able
    it('Test Case 16', () => {
        Homepage.Women_Button_on_Homepage_TC_16();
    });


    // To verify if the Kids Button is visible on homepage
    it('Test Case 17', () => {
        Homepage.Kids_Button_on_Homepage_TC_17(); 
    });




    // To validate if the Kids button is click able
    it('Test Case 18', () => {
        Homepage.Kids_Button_on_Homepage_TC_18(); 
    });




    // To verify if the Men Button is visible on homepage
    it('Test Case 19', () => {
        Homepage.Men_Button_on_Homepage_TC_19();
    });




    // To validate if the Men button is click able
    it('Test Case 20', () => {
        Homepage.Men_Button_on_Homepage_TC_20();
    });




    // To verify if the Logo is visible on homepage
    it('Test Case 21', () => {
        Homepage.Logo_TC_21();
    });




    // To validate if the Logo is click able
    it('Test Case 22', () => {
        Homepage.Logo_TC_22();
    });
});