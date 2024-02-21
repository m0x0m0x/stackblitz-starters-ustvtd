/*
This if for checking the balance
Referring to this documentation 
*/
const { Web3 } = require("web3");

//private RPC endpoint
const web3 = new Web3("https://rpc.ankr.com/polygon");

//or public RPC endpoint
//const web3 = new Web3('https://eth.llamarpc.com');

web3.eth.getBlockNumber().then(console.log);
// ↳ 18849658n

web3.eth.getGasPrice().then((gasPrice) => {
  console.log("Fucking gas price is", gasPrice);
});
