import Homepage_TSc_02 from "../support/Thesouledstore/Homepage.cy";
import Login_TSc_01 from "../support/Thesouledstore/Login.cy";
describe('Test Scope', () => {
  const Homepage =  new Homepage_TSc_02();
  const Login = new Login_TSc_01();
  it('Test Case 01', () => {
    Login.Login_Button_TC_01();
  });
});