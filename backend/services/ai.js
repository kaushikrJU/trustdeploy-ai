const safeExplanations = [
    "Deployment verified successfully. Blockchain hash matches generated artifact hash.",
    
    "Security validation passed. Artifact integrity confirmed through blockchain verification.",
    
    "Hash verification complete. No tampering detected in deployment pipeline.",
    
    "Artifact authenticity confirmed. Deployment is safe to proceed.",
    
    "Blockchain integrity check passed successfully for this deployment."
];

const tamperedExplanations = [
    "CRITICAL: Hash mismatch detected. Possible supply chain attack identified.",
    
    "Security breach detected. Artifact hash differs from blockchain record.",
    
    "Integrity verification failed. Deployment artifact may have been modified.",
    
    "WARNING: Potential tampering detected in deployment pipeline.",
    
    "Artifact validation failed. Unauthorized modification may have occurred."
];

const safeRecommendations = [
    "Proceed with deployment.",
    "Continue monitoring deployment logs.",
    "Maintain blockchain audit records."
];

const tamperedRecommendations = [
    "HALT deployment immediately.",
    "Investigate CI/CD pipeline activity.",
    "Regenerate artifact from trusted source.",
    "Review build environment security."
];


function getRandomItem(array) {
    return array[
        Math.floor(Math.random() * array.length)
    ];
}


function analyzeResult({
    isSafe,
    commitId,
    generatedHash,
    blockchainHash,
    timestamp
}) {

    let status;
    let trustScore;
    let riskLevel;
    let explanation;
    let recommendations;

    
    if (isSafe) {

        status = "SAFE";

        trustScore =
            90 + Math.floor(Math.random() * 11);

        riskLevel = "LOW";

        explanation =
            getRandomItem(safeExplanations);

        recommendations =
            safeRecommendations;

    } else {

        status = "TAMPERED";

        trustScore =
            10 + Math.floor(Math.random() * 21);

        if (trustScore <= 14) {
            riskLevel = "CRITICAL";
        } else if (trustScore <= 24) {
            riskLevel = "HIGH";
        } else {
            riskLevel = "MEDIUM";
        }

        explanation =
            getRandomItem(tamperedExplanations);

        recommendations =
            tamperedRecommendations;
    }


    return {

        status,

        trustScore,

        riskLevel,

        explanation:
            `${explanation} Commit ID: ${commitId}`,

        recommendations,

        metadata: {

            commitId,

            verifiedAt: timestamp,

            hashMatch:
                generatedHash === blockchainHash
        }
    };
}

module.exports = {
    analyzeResult
};