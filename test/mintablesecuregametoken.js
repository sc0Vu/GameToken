var MintableSecureGameToken = artifacts.require("./MintableSecureGameToken.sol");

contract('MintableSecureGameToken', function(accounts) {
  var firstAccount = accounts[0];
  var secondAccount = accounts[1];
  var thirdAccount = accounts[2];

  it("should put 10000 GameToken in the first account", function() {
    var token;

    return MintableSecureGameToken.new(10000, "Secure Game Token", 1, "SGT", {from: firstAccount}).then(function(instance) {
      token = instance;

      return token.balanceOf.call(firstAccount);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 10000, "10000 Secure Game Token wasn't in the first account");
    });
  });

  it("should mint 10000 GameToken to the second account", function() {
    var token;

    return MintableSecureGameToken.new(10000, "Secure Game Token", 1, "SGT", {from: firstAccount}).then(function(instance) {
      token = instance;

      return token.mint(secondAccount, 10000, {from: firstAccount});
    }).then(function () {
      return token.balanceOf.call(secondAccount);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 10000, "10000 Secure Game Token wasn't in the second account");
    });
  });

  // it("should not mint 10000 GameToken to the second account", function() {
  //   var token;

  //   return MintableSecureGameToken.new(10000, "Secure Game Token", 1, "SGT", {from: firstAccount}).then(function(instance) {
  //     token = instance;

  //     return token.mint(secondAccount, 10000, {from: secondAccount});
  //   }).then(function () {
  //     return token.balanceOf.call(secondAccount);
  //   }).then(function (balance) {
  //     assert.equal(balance.valueOf(), 0, "10000 Secure Game Token was in the second account");
  //   });
  // });

  // it("should finish minting", function() {
  //   var token;

  //   return MintableSecureGameToken.new(10000, "Secure Game Token", 1, "SGT", {from: firstAccount}).then(function(instance) {
  //     token = instance;

  //     return token.finishMinting({from: firstAccount});
  //   }).then(function () {
  //     return token.mint(secondAccount, 10000, {from: firstAccount});
  //   }).then(function () {
  //     return token.balanceOf.call(secondAccount);
  //   }).then(function (balance) {
  //     assert.equal(balance.valueOf(), 0, "10000 Secure Game Token was in the second account");
  //   });
  // });

  it("should finish minting", function() {
    var token;

    return MintableSecureGameToken.new(10000, "Secure Game Token", 1, "SGT", {from: firstAccount}).then(function(instance) {
      token = instance;

      return token.finishMinting({from: firstAccount});
    }).then(function () {
      return token.mintingFinished();
    }).then(function (mintingFinished) {
      assert.equal(mintingFinished.valueOf(), true, "minting finished sould be true");
    });
  });
});
