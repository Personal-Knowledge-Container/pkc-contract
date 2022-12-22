// require('dotenv').config();
// npx hardhat run ./scripts/mint-nft-ecatalogue.js

const ethers = require('ethers');

// Get Alchemy App URL
const API_KEY = process.env.API_KEY;

// Define an Alchemy Provider
const provider = new ethers.providers.AlchemyProvider('goerli', API_KEY)

// Get contract ABI file
const contract = require("../artifacts/contracts/eCatalogue.sol/eCatalogue.json");

// Create a signer
const privateKey = process.env.PRIVATE_KEY
const signer = new ethers.Wallet(privateKey, provider)

// Get contract ABI and address
const abi = contract.abi
const contractAddress = '0x501193661E484bEb8264a481628bd26340DA77d9'

// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer)

// Get the NFT Metadata IPFS URL
// const tokenUri = "https://pkc-lkpp.dev/wiki/VICAM_DONTEST_WB_HPLC_KIT_50_COLUMNS_%2B_1_SET_STANDARD"
const fs = require('fs');
const filecontent = fs.readFileSync('/tmp/tokenuri.txt', 'utf8');

// Call mintNFT function
const mintNFT = async () => {

    let nftTxn = await myNftContract.mintNFT(signer.address,filecontent);
    await nftTxn.wait();
    // console.log(`NFT Minted! Check it out at: https://goerli.etherscan.io/tx/${nftTxn.hash}`)
    console.log(`{ "status": "success", "txHash": "${nftTxn.hash}" }`)
}

mintNFT()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });