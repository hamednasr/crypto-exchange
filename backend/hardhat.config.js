require("@nomicfoundation/hardhat-toolbox");

// require("hardhat-deploy")
// // require("@nomiclabs/hardhat-waffle")
// require("hardhat-gas-reporter")
// require("@nomiclabs/hardhat-etherscan")
require("dotenv").config();
// require("solidity-coverage")
// require("@nomiclabs/hardhat-ethers")
// require("@nomicfoundation/hardhat-chai-matchers")

module.exports = {
  solidity: "0.8.9",

  networks: {
    hardhat: {},
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 4,
      blockConfirmation: 3,
    },
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    // coinmarketcap: COINMARKETCAP_API_KEY
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    },
  },
};
