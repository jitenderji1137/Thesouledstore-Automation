var chai = require('chai');  
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
const Number = "9838962087";
const email = "lovif3947@stash.com";
require('cypress-xpath');
class Login_TSc_01{

    // To verify if the Login icon is visible on the home page
    Login_Button_TC_01(){
      cy.visit('https://www.thesouledstore.com/');
      cy.get('.nav-item.navicon.dropdown.iconlink').should('be.visible');
      cy.log("Test Case TC_01 has passed...")
    }


    // To validate if the Login icon is click able on the home page ang redirect to login page
    Login_Button_TC_02(){
      cy.visit('https://www.thesouledstore.com/');
      cy.get('.nav-item.navicon.dropdown.iconlink').should('be.visible');  
      cy.get('.nav-item.navicon.dropdown.iconlink').click();
      cy.wait(3000);
      cy.url().should("equal","https://www.thesouledstore.com/login?redirect=%2F")
      cy.log("Test Case TC_02 has passed...")
    }



    // To verify if the Login Page is visible and Register Button is present on login page
    Register_Page_TC_03(){
      cy.visit('https://www.thesouledstore.com/');
      cy.get('.nav-item.navicon.dropdown.iconlink').click();
      cy.wait(3000);
      cy.xpath("//div[text()='Login with The Souled Store']").should("have.text","Login with The Souled Store");
      cy.get("span[class='nav-link']").should("be.visible");
      cy.get("span[class='nav-link']").click();
      cy.log("Test Case TC_03 has passed...")
    }


    // To validate if the user able to type in input tags , able to click on check box and click on register button
    Register_Page_TC_04(){
        cy.visit('https://www.thesouledstore.com/');
        cy.get('.nav-item.navicon.dropdown.iconlink').click();
        cy.get("span[class='nav-link']").click();
        cy.get("input[placeholder='First Name *']").type("Jitender").should("have.value","Jitender");
        cy.get("input[placeholder='Last Name']").type("Saini").should("have.value","Saini");
        cy.get("input[placeholder='Email ID *']").type(email).should("have.value",email);
        cy.get("input[placeholder='Choose New Password *']").type("jitender123@@").should("have.value","jitender123@@");
        cy.get("input[placeholder='Confirm Password *']").type("jitender123@@").should("have.value","jitender123@@");
        cy.xpath("//input[@type='mobile']").type(Number).should("have.value",Number);
        cy.xpath("//label[@class='form-check-label']//label[1]").click();
        cy.get("button[type='submit']").click();
        cy.log("Test Case TC_04 has passed...");
      }


    //   To verify if the Login Page is visible and Login Form is present on login page
      Login_Page_TC_05(){
        cy.visit('https://www.thesouledstore.com/');
        cy.get('.nav-item.navicon.dropdown.iconlink').click();
        cy.xpath("//div[text()='Login with The Souled Store']").should("have.text","Login with The Souled Store");
        cy.get("form[method='POST']").should("be.visible");
        cy.log("Test Case TC_05 has passed...")
      }



    //   To validate if the Login Form we are able to type mobile number and proceed button is click able
    Login_Page_TC_06(){
        cy.visit('https://www.thesouledstore.com/');
        cy.get('.nav-item.navicon.dropdown.iconlink').click();
        cy.get("input[placeholder='Enter Phone Number']").type(Number).should("have.value",Number);
        cy.get("button[type='submit']").should("be.visible");
        cy.log("Test Case TC_06 has passed...");
    }


    // To Validate that we are not able to login with wrong credentials 
    Login_with_Wrong_Credentials_TC_07(){
        cy.visit('https://www.thesouledstore.com/');
        cy.get('.nav-item.navicon.dropdown.iconlink').click();
        cy.get("input[placeholder='Enter Phone Number']").type(Number).should("have.value",Number);
        cy.get("button[type='submit']").click();
        cy.wait(5000);
        cy.xpath("(//input[contains(@type,'number')])[1]").type("1");
        cy.xpath("(//input[contains(@type,'number')])[2]").type("2");
        cy.xpath("(//input[contains(@type,'number')])[3]").type("3");
        cy.xpath("(//input[contains(@type,'number')])[4]").type("4");
        cy.get("button[type='submit']").click();
        cy.xpath("//div[text()='Wrong OTP! Please enter correct OTP.']").should("have.text","Wrong OTP! Please enter correct OTP.");
        cy.log("Test Case TC_07 has passed...");
    }


    // To Validate that we are able to login with wrong credentials 
    Login_with_Right_Credentials_TC_08(){
        cy.visit('https://www.thesouledstore.com/');
        cy.get('.nav-item.navicon.dropdown.iconlink').click();
        cy.get("input[placeholder='Enter Phone Number']").type(Number).should("have.value",Number);
        cy.get("button[type='submit']").click();
        cy.wait(10000);
        cy.get("button[type='submit']").click();
        cy.url().should("equal","https://www.thesouledstore.com/login?redirect=%2F");
        cy.log("Test Case TC_08 has passed...");
    }
}
export default Login_TSc_01