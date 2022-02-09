const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  const Nambv = await hre.ethers.getContractFactory("Nambv");
  const nambv = await Nambv.deploy();
  await nambv.deployed();

  console.log("Nambv deployed to:", nambv.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
