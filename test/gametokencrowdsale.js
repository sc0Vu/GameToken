var GameTokenCrowdsale = artifacts.require("./GameTokenCrowdsale.sol");

contract('GameTokenCrowdsale', function(accounts) {
  var firstAccount = accounts[0];
  var secondAccount = accounts[1];
  var thirdAccount = accounts[2];
  var now = new Date;

  now = now.valueOf();

  it("should return token address", function() {
    var crowdSale;

    return GameTokenCrowdsale.new(now, now + 86400000, 1, firstAccount, {from: firstAccount}).then(function(instance) {
      crowdSale = instance;

      return crowdSale.token();
    }).then(function (address) {
      assert.equal(address.valueOf().length, 42, "token address with 0x");
    });
  });
});
