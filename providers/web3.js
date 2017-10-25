var Web3 = require("web3")
var web3 = new Web3()
var provider = new web3.providers.HttpProvider("http://geth:8545")
var assert = require('assert')

web3.setProvider(provider)

assert.equal(web3.isConnected(), true, 'Web3 cannot connect to the http host')
web3.personal.unlockAccount(web3.eth.accounts[0], '123456')

module.exports = {
  web3: web3,
  account: web3.eth.accounts[0]
}