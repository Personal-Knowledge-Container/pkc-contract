// SPDX-License-Identifier: MIT
// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity >=0.7.3;
// Initial value
// Product, Price, Qty
// Interaction:
// ppk sign
// Action: auto create new purchase-contract
contract Purchase {

    event UpdatedMessages(string oldStr, string newStr);
    // Declares a state variable `message` of type `string`.
    // json structured as key value pair
    // Product:
    // Qty:
    // Price:
    // NFT Address:
    string public message;

    constructor(string memory initMessage) {
      // Accepts a string argument `initMessage` and sets the value into the 
      // contract's `message` storage variable).
      message = initMessage;
    }

   // A public function that accepts a string argument and updates 
   // the `message` storage variable.
   function update(string memory newMessage) public {
      string memory oldMsg = message;
      message = newMessage;
      emit UpdatedMessages(oldMsg, newMessage);
   }

}