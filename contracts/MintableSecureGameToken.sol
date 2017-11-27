pragma solidity ^0.4.18;

import './SecureGameToken.sol';
import "zeppelin-solidity/contracts/token/MintableToken.sol";


contract MintableSecureGameToken is SecureGameToken, MintableToken {

  function MintableSecureGameToken(uint256 initialSupply, string tokenName, uint8 decimalUnits, string tokenSymbol) SecureGameToken(initialSupply, tokenName, decimalUnits, tokenSymbol) public {}

}