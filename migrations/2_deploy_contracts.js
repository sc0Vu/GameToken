var GameToken = artifacts.require("./GameToken.sol");
var SecureGameToken = artifacts.require("./SecureGameToken.sol");
var MintableSecureGameToken = artifacts.require("./MintableSecureGameToken.sol");
var GameTokenCrowdsale = artifacts.require("./GameTokenCrowdsale.sol");
var OverflowGameToken = artifacts.require("./OverflowGameToken.sol");

module.exports = function(deployer, network, accounts) {
  var now = new Date;

  now = now.valueOf();

  deployer.deploy(GameToken);
  deployer.deploy(SecureGameToken);
  deployer.link(SecureGameToken, MintableSecureGameToken);
  deployer.deploy(MintableSecureGameToken);
  deployer.link(MintableSecureGameToken, GameTokenCrowdsale);
  deployer.deploy(GameTokenCrowdsale, now, now + 86400, 1, accounts[0]);
  // play with overflow
  deployer.deploy(OverflowGameToken);
};
