// Import the buildModule function from the Hardhat Ignition modules package
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("UploadModule", (m) => {
  // Deploy the Upload contract
  const upload = m.contract("Upload");

  // Return the deployed contract instance
  return { upload };
});
