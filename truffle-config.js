const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    d: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 10002,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      from: 0x8c16FfBcB662DBb58708f6e9EE5f93A742C7A2d3
    },
    matic: {
      provider: () => new HDWalletProvider(mnemonic, `http://127.0.0.1:10002/`),
      network_id: 1212,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.16",
    }
  }
}