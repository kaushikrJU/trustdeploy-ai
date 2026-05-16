function analyzeResult(isSafe) {

    if (isSafe) {

        return {
            status: "SAFE",
            trustScore: 95,
            riskLevel: "LOW",
            explanation:
                "Deployment verified successfully. Blockchain hash matches generated artifact hash."
        };
    }

    return {
        status: "TAMPERED",
        trustScore: 20,
        riskLevel: "HIGH",
        explanation:
            "Hash mismatch detected. Possible supply chain attack or unauthorized artifact modification."
    };
}

module.exports = {
    analyzeResult
};