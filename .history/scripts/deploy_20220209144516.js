const hre = require("hardhat");

async function main() {
  const Nambv = await hre.ethers.getContractFactory("Nambv");
  const nambv = await Nambv.deploy("Hello, Hardhat!");
  await nambv.deployed();

  console.log("Nambv deployed to:", nambv.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
