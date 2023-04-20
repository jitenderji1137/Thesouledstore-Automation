var chai = require('chai');  
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
class Login_TSc_01{
    Login_Button_TC_01(){
      cy.visit('https://www.thesouledstore.com/');
      cy.get('.nav-item.navicon.dropdown.iconlink').should('be.visible');
    }
    Login_Button_TC_02(){

    }
}
export default Login_TSc_01