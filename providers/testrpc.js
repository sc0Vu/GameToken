// testrpc ethereum blockchain provider
const testRPC = require("ethereumjs-testrpc");

module.exports = testRPC.provider({ seed: 'test' });