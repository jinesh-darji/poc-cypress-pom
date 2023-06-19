class SigninPage {
  lblSignin = "//h1[text()='Sign in']";
  btnSocialTab = "//div[text()='Social']";
  btnGoogle = "Google";
  btnApple = "Apple";
  btnFacebook = "Facebook";
  btnDiscord = "Discord";
  btnTwitter = "Twitter";
  btnEmail = "Email";
  btnGitHub = "GitHub";
  btnTwitch = "Twitch";
  btnWeb3Tab = "//div[text()='Web3']";
  btnMetaMask = "MetaMask";
  btnCoinbaseWallet = "Coinbase Wallet";
  btnWalletConnect = "WalletConnect";
  lnkShowMore = "//p[text()='more']";
  lnkShowLess = "//p[text()='less']";

  get openURL() {
    return cy;
  }

  get verifySignInPage() {
    return cy.xpath(this.lblSignin);
  }

  get clickSocialTab() {
    return cy.xpath(this.btnSocialTab);
  }

  get clickGoogle_Social() {
    return cy.contains(this.btnGoogle);
  }

  get clickApple_Social() {
    return cy.contains(this.btnApple);
  }

  get clickFacebook_Social() {
    return cy.contains(this.btnFacebook);
  }

  get clickDiscord_Social() {
    return cy.contains(this.btnDiscord);
  }

  get clickTwitter_Social() {
    return cy.contains(this.btnTwitter);
  }

  get clickEmail_Social() {
    return cy.contains(this.btnEmail);
  }

  get clickGitHub_Social() {
    return cy.contains(this.btnGitHub);
  }

  get clickTwitch_Social() {
    return cy.contains(this.btnTwitch);
  }

  get clickWeb3Tab() {
    return cy.xpath(this.btnWeb3Tab);
  }

  get clickMetaMask_Web3() {
    return cy.contains(this.btnMetaMask);
  }

  get clickCoinbaseWallet_Web3() {
    return cy.contains(this.btnCoinbaseWallet);
  }

  get clickWalletConnect_Web3() {
    return cy.contains(this.btnWalletConnect);
  }

  get clickShowMoreOptionLNK() {
    return cy.xpath(this.lnkShowMore);
  }

  get clickShowLessOptionLNK() {
    return cy.xpath(this.lnkShowLess);
  }
}

let signin = new SigninPage();
export default signin;
