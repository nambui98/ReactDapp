const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  const Yen = await hre.ethers.getContractFactory("Yen");
  const yen = await Yen.deploy();
  await yen.deployed();

  console.log("Yen deployed to:", yen.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
