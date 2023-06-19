import signin from "../../PageObjects/signInPage";
import signinWithEmail from "../../PageObjects/signInWithEmailPage";
import home from "../../PageObjects/homePage";

describe("Registration Scenarios", () => {
  it("Signin with Email Option:", () => {
    cy.fixture("testdata").then((data) => {
      // launch the application
      signin.openURL.visit(data.application_url);

      // Validate the Signin Screen
      signin.verifySignInPage.should("be.visible");

      // Click on the Email Option
      signin.clickEmail_Social.click();

      // Enter Email Address in the Email Field
      signinWithEmail.setEmail.type(data.signin_email);

      // Click on the Signin Button
      signinWithEmail.clickSignin.click();

      // Validate the Home Screen
      home.verifyHomePage.should("be.visible");

      cy.wait(5000);
    });
  });
});
