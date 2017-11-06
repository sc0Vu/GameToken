var Web3 = require("web3")
var web3 = new Web3()
var provider = new web3.providers.HttpProvider("http://localhost:8545")
var GameToken = require('../build/contracts/GameToken.json')

web3.setProvider(provider)

var contract = new web3.eth.Contract(GameToken.abi, '0x12345.......')

var contract = new web3.eth.Contract(GameToken.abi, '0x12345.......')

// call contract transfer that only execute on EVM without sending any transaction
contract.methods.transfer('0x00000......', 1).call({
  from: '0x0000...',
  (error, result) => {
    // do something here
  }
})

// send contract transfer to create transaction
contract.methods.transfer('0x00000......', 1).send({
  from: '0x00010...',
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
