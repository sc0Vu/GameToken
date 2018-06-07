pragma solidity ^0.4.18;

// import './GameToken.sol';

// interface Token {
//     function transfer(address _to, uint256 _value) public returns (bool success);
// }

// contract Token {
//     function transfer(address _to, uint256 _value) public returns (bool success);
// }

contract TestInterface {
    address public tokenAddress;

    function TestInterface(address _tokenAddress) public {
        tokenAddress = _tokenAddress;
    }

    function transfer(address _to, uint256 _value) public {
        // Cannot transfer token:
        // Token(tokenAddress).transfer(_to, _value);

        // Can transfer token:
        // GameToken(tokenAddress).transfer(_to, _value);
        
        // transfer 0xa9059cbb
        tokenAddress.call(0xa9059cbb, _to, _value);
        // tokenAddress.delegatecall(0xa9059cbb, _to, _value);
    }
}