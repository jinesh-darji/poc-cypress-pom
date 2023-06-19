class HomePage {
  lblSend = "//span[text()='Send']";

  get verifyHomePage() {
    return cy.xpath(this.lblSend, { timeout: 999999 });
  }
}

let home = new HomePage();
export default home;
