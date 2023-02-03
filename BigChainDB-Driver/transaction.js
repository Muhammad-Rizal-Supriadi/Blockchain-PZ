const BigchainDB = require('bigchaindb-driver');
const conn = new BigchainDB.Connection('http://localhost:9984/api/v1/');
const alice = new BigchainDB.Ed25519Keypair();

// Define the asset
const asset = {
  data: {
    msg: 'Hello BigchainDB!'
  }
};

// Define the metadata
const metadata = {
  sequence: 0
};

// Create the transaction
const tx = BigchainDB.Transaction.makeCreateTransaction(
  asset,
  metadata,
  [ BigchainDB.Transaction.makeOutput(
      BigchainDB.Transaction.makeEd25519Condition(alice.publicKey))
  ],
  alice.publicKey
);

// Sign the transaction
const txSigned = BigchainDB.Transaction.signTransaction(tx, alice.privateKey);

// Post the transaction
conn.postTransactionCommit(txSigned)
  .then(res => {
    console.log(res.id);
  })
  .catch(err => {
    console.error(err);
  });