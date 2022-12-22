async function main() {
    const Purchase = await ethers.getContractFactory("Purchase");
 
    // Start deployment, returning a promise that resolves to a contract object
    const purchase_deploy = await Purchase.deploy("Product: ETHYL_METHANOL_CHEMICAL|Qty: 10|Price: 5000|NFT: 0xee8247c6f19f9f070dd4908d91849885e292af8f");
    console.log("Contract deployed to address:", purchase_deploy.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });

// npx hardhat run scripts/deploy-purchase.js