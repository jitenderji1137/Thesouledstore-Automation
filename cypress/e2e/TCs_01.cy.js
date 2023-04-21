import Login_TSc_01 from "../support/Thesouledstore/Login.cy";
describe('Test Scope TCs_01', () => {
  const Login = new Login_TSc_01();


  // To verify if the Login icon is visible on the home page
  it('Test Case 01', () => {
    Login.Login_Button_TC_01();
  });


  // To validate if the Login icon is click able on the home page ang redirect to login page
  it("Test Case 02", () => {
    Login.Login_Button_TC_02();
  })



  // To verify if the Login Page is visible and Register Button is present on login page
  it('Test Case 03', () => {
    Login.Register_Page_TC_03();
  });



  // To validate if the user able to type in input tags , able to click on check box and click on register button
  it('Test Case 04', () => {
    Login.Register_Page_TC_04();
  });



  // To verify if the Login Page is visible and Login Form is present on login page
  it('Test Case 05', () => {
    Login.Login_Page_TC_05();
  });


    //   To validate if the Login Form we are able to type mobile number and proceed button is click able
    it('Test Case 06', () => {
      Login.Login_Page_TC_06();
    });


    // To Validate that we are not able to login with wrong credentials 
    it('Test Case 07', () => {
      Login.Login_with_Wrong_Credentials_TC_07();
    });



    // To Validate that we are able to login with wrong credentials \
    it('Test Case 08', () => {
      Login.Login_with_Right_Credentials_TC_08();
    });
});