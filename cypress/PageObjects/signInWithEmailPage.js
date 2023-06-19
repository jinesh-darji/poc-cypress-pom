class SignInWithEmailPage {
  txtEmail = "//input[@placeholder='Enter you email']";
  btnSignin = "//button[text()='Sign in']";

  get setEmail() {
    return cy.xpath(this.txtEmail);
  }

  get clickSignin() {
    return cy.xpath(this.btnSignin);
  }
}

let signinWithEmail = new SignInWithEmailPage();
export default signinWithEmail;
