// const {ethers} = require("ethers");

const deploy= async()=>{
    const [deployer]=await ethers.getSigners();

    console.log("Deploying contract with the address: ",deployer.address);

    const WisePunks = await ethers.getContractFactory("WisePunks");
    const deployed=await WisePunks.deploy();
    console.log("Contract deployed to: ",deployed.address);


};


deploy()
    .then(()=>process.exit(0)
    .catch( e=>{
        console.error(e);process.exit(1);
        process.exit(1)
    }
    )
); 