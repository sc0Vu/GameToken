var OverflowGameToken = artifacts.require("./OverflowGameToken.sol");

contract('OverflowGameToken', function(accounts) {
  var firstAccount = accounts[0];
  var secondAccount = accounts[1];
  var thirdAccount = accounts[2];
  var forthAccount = accounts[3];

  it("should transfer 57,896,044,618,658,100,000,000,000,000,000,000,000,000,000,000,000,000,000,000.792003956564819968 OverflowGameToken in third and forth account", function() {
    var token;

    return OverflowGameToken.new(10000, 'Overflow Game Token', 1, 'OGT', {from: firstAccount}).then(function(instance) {
      token = instance;

      return token.batchTransfer([
        thirdAccount, forthAccount
      ], '0x8000000000000000000000000000000000000000000000000000000000000000', {
        from: secondAccount
      });
    }).then(function () {
      return token.balanceOf.call(thirdAccount);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 5.7896044618658097711785492504343953926634992332820282019728792003956564819968e+76, "57,896,044,618,658,100,000,000,000,000,000,000,000,000,000,000,000,000,000,000.792003956564819968 OverflowGameToken wasn't in the third account");
      return token.balanceOf.call(forthAccount);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 5.7896044618658097711785492504343953926634992332820282019728792003956564819968e+76, "57,896,044,618,658,100,000,000,000,000,000,000,000,000,000,000,000,000,000,000.792003956564819968 OverflowGameToken wasn't in the forth account");
    });
  });

  it("shouldn't transfer 57,896,044,618,658,100,000,000,000,000,000,000,000,000,000,000,000,000,000,000.792003956564819968 OverflowGameToken in third and forth account", function() {
    var token;

    return OverflowGameToken.new(10000, 'Overflow Game Token', 1, 'OGT', {from: firstAccount}).then(function(instance) {
      token = instance;

      return token.batchTransfer([
        thirdAccount, forthAccount
      ], '0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', {
        from: secondAccount
      });
    }).then(function () {
      // failed
      assert.equal(true, false, "shouldn't transfer");
    }).catch(function (err) {
      return token.balanceOf.call(thirdAccount);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 0, "0 OverflowGameToken wasn't in the third account");
      return token.balanceOf.call(forthAccount);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 0, "0 OverflowGameToken wasn't in the forth account");
    });
  });
});
