/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { API_URL, PRIVATE_KEY   } = process.env;
// const { ethers } = require("hardhat");

module.exports = {
  solidity: "0.8.17",
  etherscan: {
   apiKey: "WUVG9MVP6UMSG4V9YP6PG942IHG7KTUAXY",
   },  
  defaultNetwork: "goerli",
  networks: {
     hardhat: {},
     goerli: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
     },
  },
};
