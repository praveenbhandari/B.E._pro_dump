const ConvertLib = artifacts.require("./mini");
// const MetaCoin = artifacts.require("MetaCoin");

module.exports = function (deployer) {
  deployer.deploy(mini);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
};