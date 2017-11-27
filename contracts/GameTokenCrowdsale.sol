pragma solidity ^0.4.18;

import './MintableSecureGameToken.sol';
import "zeppelin-solidity/contracts/crowdsale/Crowdsale.sol";

contract GameTokenCrowdsale is Crowdsale {

  function GameTokenCrowdsale(uint256 startTime, uint256 endTime, uint256 rate, address wallet) public Crowdsale(startTime, endTime, rate, wallet) {}

  function createTokenContract() internal returns (MintableToken) {
    return new MintableSecureGameToken(10000, "Secure Game Token", 1, "SGT");
  }

}