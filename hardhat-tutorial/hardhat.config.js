require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL =
  "https://restless-flashy-gas.ethereum-goerli.discover.quiknode.pro/474f702beb89e04a523301cd2334d5db603ca508/";
const PRIVATE_KEY =
  "2ece2125c277fdf8de48281ec644e133c5369f040e9a39db894b459ed1d95ff8";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
