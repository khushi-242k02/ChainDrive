require("@nomicfoundation/hardhat-ignition");


module.exports = {
  solidity: "0.8.18", // Update to match your Solidity version
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // Default URL for Hardhat node
    },
  },
};