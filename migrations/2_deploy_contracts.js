var GameToken = artifacts.require("./GameToken.sol");
var SecureGameToken = artifacts.require("./SecureGameToken.sol");

module.exports = function(deployer) {
  deployer.deploy(GameToken);
  deployer.deploy(SecureGameToken);
};
