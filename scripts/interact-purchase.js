// interact.js
const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { text } = require("express");
// interact.js

// For Truffle
// const contract = require("./build/contracts/HelloWorld.json");

// For Hardhat
const { ethers } = require("hardhat")
const contract = require("../artifacts/contracts/Purchase.sol/Purchase.json");

// provider - alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const purchaseContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main (){
    // showing current message
    const message = await purchaseContract.message();
    console.log("the message is " + message);

    console.log("Updating the message")
    const tx = await purchaseContract.update("This is new message");
    await tx.wait();
    
    const newMessage = await purchaseContract.message();
    console.log("New message is " + newMessage);
    // contract.update("goodbye world");
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});
