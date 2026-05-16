const express = require("express");

const router = express.Router();

const { generateHash } =
    require("../services/hashing");

const {
    storeHash,
    getHash
} = require("../services/blockchain");

const { analyzeResult } =
    require("../services/ai");


// STORE HASH
router.post("/store", async (req, res) => {

    try {

        const { commitId, data } = req.body;

        const hash = generateHash(data);

        await storeHash(commitId, hash);

        res.json({
            success: true,
            commitId,
            hash
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Failed to store hash"
        });
    }
});


// VERIFY HASH
router.post("/verify", async (req, res) => {

    try {

        const { commitId, data } = req.body;

        const generatedHash =
            generateHash(data);

        const blockchainHash =
            await getHash(commitId);

        const isSafe =
            generatedHash === blockchainHash;

        const aiResponse =
            analyzeResult(isSafe);

        res.json({
            generatedHash,
            blockchainHash,
            ...aiResponse
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Verification failed"
        });
    }
});

module.exports = router;