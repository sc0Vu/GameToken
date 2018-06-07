var GameToken = artifacts.require("./GameToken.sol");
var SecureGameToken = artifacts.require("./SecureGameToken.sol");
var MintableSecureGameToken = artifacts.require("./MintableSecureGameToken.sol");
var GameTokenCrowdsale = artifacts.require("./GameTokenCrowdsale.sol");
var OverflowGameToken = artifacts.require("./OverflowGameToken.sol");

module.exports = function(deployer, network, accounts) {
  var now = new Date;

  now = now.valueOf();

  // deployer.deploy(GameToken, 10000, 'Game Token', 1, 'GT');
  // deployer.deploy(SecureGameToken, 10000, 'Secure Game Token', 1, 'SGT');
  // deployer.link(SecureGameToken, MintableSecureGameToken);
  // deployer.deploy(MintableSecureGameToken, 10000, 'Mintable Game Token', 1, 'MGT');
  // deployer.link(MintableSecureGameToken, GameTokenCrowdsale);
  deployer.deploy(GameTokenCrowdsale, now, now + 86400, 1, accounts[0]);
  // play with overflow
  // deployer.deploy(OverflowGameToken, 10000, 'Overflow Game Token', 1, 'OGT');
};
