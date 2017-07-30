pragma solidity ^0.4.2;


import "zeppelin-solidity/contracts/token/StandardToken.sol";


contract SecureGameToken is StandardToken {

  string public name;
  string public symbol;
  uint256 public decimals;

  function SecureGameToken(
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

}