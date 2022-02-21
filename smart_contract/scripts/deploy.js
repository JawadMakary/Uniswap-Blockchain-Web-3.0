const main = async () => {
  const transactionFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );
  const transactionContract = await transactionFactory.deploy();
  await transactionContract.deployed();
  console.log(transactionContract.address);
  console.log("Transactions deployed to: ", transactionContract.address);
  //IIF --> IMMEDIATELY ENVOKED FUNCTION
  ;(async () => {
    try {
      await main();
      process.exit(0);
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  })();
};
