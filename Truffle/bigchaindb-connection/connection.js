const BigchainDB = require('bigchaindb-driver');

// Define connection to BigchainDB server
const conn = new BigchainDB.Connection('https://test.bigchaindb.com/api/v1/', {
    app_id: 'YOUR_APP_ID',
    app_key: 'YOUR_APP_KEY'
});

module.exports = conn;