var Web3 = require("web3")
var web3 = new Web3()
var provider = new web3.providers.HttpProvider("http://localhost:8545")
var GameToken = require('../build/contracts/GameToken.json')

web3.setProvider(provider)

// deploy the contract
var contract = new web3.eth.Contract(GameToken.abi).deploy({
  data: GameToken.bytecode,
  arguments: [1000000, "gametoken", 10, "GM"]
}).send({
  from: '0x0000...',
  gas: 2100000,
  gasPrice: 1
}).on('error', (error) => {
  // 
}).on('transactionHash', (transactionHash) => {
  // 
}).on('receipt', (receipt) => {
  // 
}).on('confirmation', (confirmation) => {
  // 
}).then(() => {
  // 
})

// estimate gas
// contract.estimateGas((err, gas) => {
//   if (err) {
//     return
//   }
// })

// get encode ABI
// with this code, we can sign by yoethwallet and send transaction
// contract.encodeABI()
