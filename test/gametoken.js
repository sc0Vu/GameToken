var GameToken = artifacts.require("./GameToken.sol");
var TestInterface = artifacts.require("./TestInterface.sol");

contract('GameToken', function(accounts) {
  var firstAccount = accounts[0];
  var secondAccount = accounts[1];
  var thirdAccount = accounts[2];

  it("should put 10000 GameToken in the first account", function() {
    var token;

    return GameToken.new(10000, 'Game Token', 1, 'GT', {from: firstAccount}).then(function(instance) {
      token = instance;

      return token.balanceOf.call(firstAccount);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 10000, "10000 Game Token wasn't in the first account");
    });
  });

  it("should transfer 100 GameToken to the second account using transfer", function() {
    var token;

    return GameToken.new(10000, 'Game Token', 1, 'GT', {from: firstAccount}).then(function(instance) {
      token = instance;

      return token.transfer(secondAccount, 100, {from: firstAccount});
    }).then(function() {
      return token.balanceOf.call(secondAccount);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 100, "100 Game Token wasn't in the second account");
    });
  });

  it("should approve third account to spend 100 GameToken from first account", function() {
    var token;

    return GameToken.new(10000, 'Game Token', 1, 'GT', {from: firstAccount}).then(function(instance) {
      token = instance;

      return token.approve(thirdAccount, 100, {from: firstAccount});
    }).then(function() {
      return token.allowance.call(firstAccount, thirdAccount);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 100, "100 Game Token wasn't approved to the third account");
    });
  });

  it("should transfer 100 GameToken to the second account using transferFrom", function() {
    var token;

    return GameToken.new(10000, 'Game Token', 1, 'GT', {from: firstAccount}).then(function(instance) {
      token = instance;

      return token.approve(thirdAccount, 100, {from: firstAccount});
    }).then(function () {
      return token.transferFrom(firstAccount, secondAccount, 100, {from: thirdAccount});
    }).then(function() {
      return token.balanceOf.call(secondAccount);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 100, "100 Game Token wasn't in the second account");
    });
  });

  it("should transfer 100 GameToken to the second account using transferFrom", function() {
    var token;

    return GameToken.new(10000, 'Game Token', 1, 'GT', {from: firstAccount}).then(function(instance) {
      token = instance;

      return token.approve(secondAccount, 100, {from: firstAccount});
    }).then(function () {
      return token.transferFrom(firstAccount, secondAccount, 100, {from: secondAccount});
    }).then(function() {
      return token.balanceOf.call(secondAccount);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 100, "100 Game Token wasn't in the second account");
    });
  });

  it("should transfer 100 GameToken to the second account using transfer", function() {
    var token;
    var testInterface;

    return GameToken.new(10000, 'Game Token', 1, 'GT', {from: firstAccount}).then(function(instance) {
      token = instance;

      return TestInterface.new(token.address);
    }).then(function (instance) {
      testInterface = instance;

      return testInterface.tokenAddress.call();
    }).then(function (address) {
      assert.equal(address, token.address, "token address wann't equal");

      return token.transfer(testInterface.address, 1000, {from: firstAccount});
    }).then(function () {
      return token.balanceOf.call(testInterface.address);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 1000, "100 Game Token wasn't in the test interface account");
    }).then(function () {
      return testInterface.transfer(secondAccount, 100, {from: firstAccount});
    }).then(function () {
      return token.balanceOf.call(secondAccount);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 100, "100 Game Token wasn't in the second account");
    });
  });
});
