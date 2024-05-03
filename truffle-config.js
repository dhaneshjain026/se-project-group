const path = require('path');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  plugins: [
    'truffle-plugin-verify',
    'truffle-contract-size'
  ],
   
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider({
        privateKeys: ['YOUR_PRIVATE_KEY'],
        providerOrUrl: 'https://sepolia.infura.io/v3/def24b530cd94613aa75365dd1d0b014'
      }),
      gas: 6000000,
      network_id: 11155111
    }
  },
  api_keys: {
    sepolia_etherscan:'def24b530cd94613aa75365dd1d0b014'
  },
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};

