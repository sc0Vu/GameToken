// private ethereum blockchain provider
const Web3 = require("web3");
const web3 = new Web3();
const provider = new Web3.providers.HttpProvider("http://geth:8545");

web3.setProvider(provider);

// before web3 v0.14
// web3.personal.unlockAccount(web3.eth.accounts[0], 'your account password');

// web3 1.0
// web3.eth.personal.unlockAccount(web3.eth.accounts[0], 'your account password', 30);

module.exports = {
  web3: web3,
  account: web3.eth.accounts[0]
}