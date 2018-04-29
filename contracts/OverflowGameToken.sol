pragma solidity ^0.4.2;

import "zeppelin-solidity/contracts/token/PausableToken.sol";


contract OverflowGameToken is PausableToken {

  string public name;
  string public symbol;
  uint256 public decimals;

  function OverflowGameToken(
    uint256 initialSupply,
    string tokenName,
    uint8 decimalUnits,
    string tokenSymbol
    ) {
    balances[msg.sender] = initialSupply;
    totalSupply = initialSupply;
    name = tokenName;
    symbol = tokenSymbol;
    decimals = decimalUnits;
  }

  /**
   * Beauty Chain (BEC) ERC overflow
   * See: https://etherscan.io/tx/0xad89ff16fd1ebe3a0a7cf4ed282302c06626c1af33221ebe0d3a470aba4a660f
   *
   * uint256 cnt = _receivers.length;
   * uint256 amount = cnt.mul(_value);
   */
  function batchTransfer(address[] _receivers, uint256 _value) public whenNotPaused returns (bool) {
    uint cnt = _receivers.length;
    uint256 amount = uint256(cnt) * _value;
    require(cnt > 0 && cnt <= 20);
    require(_value > 0 && balances[msg.sender] >= amount);

    balances[msg.sender] = balances[msg.sender].sub(amount);
    for (uint i = 0; i < cnt; i++) {
        balances[_receivers[i]] = balances[_receivers[i]].add(_value);
        Transfer(msg.sender, _receivers[i], _value);
    }
    return true;
  }

}