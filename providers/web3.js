const Web3 = require("web3");
const web3 = new Web3();
const provider = new web3.providers.HttpProvider("http://geth:8545");

web3.setProvider(provider);

module.exports = {
  web3: web3,
  account: web3.eth.accounts[0]
}