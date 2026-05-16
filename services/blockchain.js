const hashStorage = {};

async function storeHash(commitId, hash) {

    hashStorage[commitId] = hash;

    return true;
}

async function getHash(commitId) {

    return hashStorage[commitId];
}

module.exports = {
    storeHash,
    getHash
};