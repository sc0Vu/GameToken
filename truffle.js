const private = require('./providers/private');
const testRPC = require('./providers/testrpc');

module.exports = {
  networks: {
    development: {
      host: "testrpc",
      port: 8545,
      network_id: "*"
    },
    private: {
      from: private.account,
      network_id: "*",
      provider: private.web3.currentProvider
    },
    test: {
      network_id: "*",
      provider: testRPC
    }
  }
}
