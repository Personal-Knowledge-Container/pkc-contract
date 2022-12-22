require('dotenv').config();
const ethers = require('ethers');

(async() => {
    const alchemy = new ethers.providers.JsonRpcBatchProvider(process.env.API_URL);
    const gasPrice = await alchemy.getGasPrice();

    console.log('Gas Price: ', ethers.utils.formatUnits(gasPrice));

})();