const web3 = require('./providers/web3');
const testRPC = require('./providers/testrpc');

module.exports = {
  networks: {
    development: {
      host: "testrpc",
      port: 8545,
      network_id: "*" // Match any network id
    },
    private: {
      from: web3.account,
      network_id: "*",
      provider: web3.web3.currentProvider
    },
    test: {
      network_id: "*",
      provider: testRPC
    }
  }
}
