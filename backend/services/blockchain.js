const { Web3 } = require("web3");

const abi = require("../contract/abi.json");

const web3 = new Web3(
    process.env.GANACHE_URL
);

const contract = new web3.eth.Contract(
    abi,
    process.env.CONTRACT_ADDRESS
);

const account =
    process.env.GANACHE_ACCOUNT;


// STORE HASH
async function storeHash(commitId, hash) {

    await contract.methods
        .storeHash(commitId, hash)
        .send({
            from: account,
            gas: 3000000
        });

    return true;
}


// GET HASH
async function getHash(commitId) {

    const result =
        await contract.methods
            .getHash(commitId)
            .call();

    return result;
}

module.exports = {
    storeHash,
    getHash
};