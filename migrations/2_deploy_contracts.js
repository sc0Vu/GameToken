var GameToken = artifacts.require("./GameToken.sol");
var SecureGameToken = artifacts.require("./SecureGameToken.sol");
var MintableSecureGameToken = artifacts.require("./MintableSecureGameToken.sol");

module.exports = function(deployer) {
  deployer.deploy(GameToken);
  deployer.deploy(SecureGameToken);
  deployer.link(SecureGameToken, MintableSecureGameToken);
  deployer.deploy(MintableSecureGameToken);
};
