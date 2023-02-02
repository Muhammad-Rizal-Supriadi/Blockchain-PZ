pragma solidity ^0.7.0;

import "./connection.js";

contract MyData {
    function storeData(string memory data) public {
        // Create a new asset
        const asset = { data: { message: data } };

        // Define the transaction
        const tx = BigchainDB.Transaction.makeCreateTransaction(
            asset,
            {},
            [ BigchainDB.Transaction.makeOutput(
                BigchainDB.Transaction.makeEd25519Condition(publicKey))
            ],
            publicKey
        );

        // Sign the transaction
        const signedTransaction = BigchainDB.Transaction.signTransaction(tx, privateKey);

        // Send the transaction to the BigchainDB network
        conn.postTransactionCommit(signedTransaction);
    }
}