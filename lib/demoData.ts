// 🛡️ TRUSTSHIELD AI Demo Security Data

export const walletReports = [
  {
    id: "TS-001",
    type: "Wallet Analysis",
    network: "Ethereum",
    address: "0x7A9f34B2C8D91E45A6F34C8D9B8A1E2F9C4D678A",
    status: "SAFE",
    riskScore: 92,
    riskLevel: "LOW",
    aiAnalysis: [
      "No suspicious behavior detected",
      "No interaction with known malicious entities",
      "Transaction pattern appears normal"
    ],
    recommendation:
      "Proceed with standard security practices.",
    date: "2026-06-14",
  },

  {
    id: "TS-002",
    type: "Wallet Analysis",
    network: "Ethereum",
    address: "0x4C9A82F6E3D1A6B7C9E5F2A7D4E1C8B9F6A3D2E1",
    status: "WARNING",
    riskScore: 56,
    riskLevel: "MEDIUM",
    aiAnalysis: [
      "Unusual transaction frequency detected",
      "Interaction with new contracts detected",
      "Limited wallet reputation history"
    ],
    recommendation:
      "Review all transactions before approval.",
    date: "2026-06-14",
  },

  {
    id: "TS-003",
    type: "Wallet Analysis",
    network: "Ethereum",
    address: "0xF9D2A1E7B4C6D8E3A5F7B9C1D2E4A6B8C3D5F7E9",
    status: "DANGER",
    riskScore: 18,
    riskLevel: "HIGH",
    aiAnalysis: [
      "Multiple suspicious interactions detected",
      "Possible scam behavior identified",
      "High risk transaction patterns observed"
    ],
    recommendation:
      "Avoid sending funds or approving permissions.",
    date: "2026-06-14",
  },
];


// Smart Contract Reports
export const contractReports = [
  {
    id: "SC-001",
    network: "Ethereum",
    contract:
      "0xAB12CD34EF56AB78CD90EF12AB34CD56EF78AB90",
    securityScore: 71,
    riskLevel: "MEDIUM",
    findings: [
      "Contract is newly deployed",
      "Owner permissions require review",
      "No public audit available"
    ],
  },
];


// Phishing Threat Reports
export const phishingReports = [
  {
    id: "PH-001",
    url: "claim-free-airdrop-example.com",
    riskLevel: "HIGH",
    score: 12,
    threats: [
      "Fake reward campaign detected",
      "Possible wallet-drainer behavior",
      "Suspicious domain pattern"
    ],
  },
];


// Dashboard Statistics
export const dashboardStats = {
  totalScans: 12450,
  safeWallets: 9870,
  mediumRisk: 1850,
  highRisk: 730,
  contractsAnalyzed: 5420,
  phishingBlocked: 312,
  aiAccuracy: "98.7%",
};


// Live Threat Feed
export const threatFeed = [
  {
    time: "14:30 UTC",
    alert:
      "Suspicious phishing campaign targeting DeFi users",
    severity: "HIGH",
  },

  {
    time: "13:50 UTC",
    alert:
      "New contract flagged for unusual permission requests",
    severity: "MEDIUM",
  },

  {
    time: "11:10 UTC",
    alert:
      "Multiple malicious websites added to the threat database",
    severity: "HIGH",
  },
];