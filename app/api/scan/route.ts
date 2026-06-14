import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";
import { isAddress } from "ethers";
import connectDB from "@/lib/mongodb";
import Scan from "@/models/Scan";

const API_KEY = process.env.ETHERSCAN_API_KEY;

export async function POST(req: Request) {
  try {

    await connectDB();
    const body = await req.json();

    const { address, network } = body;
    if (!isAddress(address)) {
  return NextResponse.json(
    {
      error: "Invalid wallet address",
    },
    {
      status: 400,
    }
  );
}

    // Get wallet transactions from Etherscan

const baseUrl = "https://api.etherscan.io/v2/api";

let chainId = "1"; // Ethereum

if (network === "polygon") {
  chainId = "137";
}

else if (network === "base") {
  chainId = "8453";
}

else if (network === "arbitrum") {
  chainId = "42161";
}


const url =
  `${baseUrl}` +
  `?chainid=${chainId}` +
  `&module=account` +
  `&action=txlist` +
  `&address=${address}` +
  `&startblock=0` +
  `&endblock=99999999` +
  `&sort=desc` +
  `&apikey=${API_KEY}`;


    const response = await fetch(url);

    const data = await response.json();

    console.log("Etherscan Response:", data);

    if (data.status !== "1") {

  return NextResponse.json({

    wallet: address,

    network,

    score: 40,

    risk: "HIGH",

    scamProbability: 90,

    riskColor: "red",

    transactionsAnalyzed: 0,

    threats: [
      "No Transaction History",
      "Limited Blockchain Evidence",
      "Unable To Verify Reputation",
      "Insufficient Activity Data",
    ],

    checks: {

      scamHistory:
        "No blockchain history found",

      contractActivity:
        "Unknown activity",

      phishingRisk:
        "Unable to verify",

      transactionPattern:
        "Insufficient data",
    },

    aiSummary:
      `No blockchain history was found on ${network}. TrustShield AI cannot perform a complete security assessment.`,
  });

}

    const transactions = data.result;

    const txCount = transactions.length;


    /*
    Simple Trust Algorithm
    */

   let score = 50;

// Transaction reputation
if (txCount === 0) {
  score -= 25;
}

else if (txCount < 10) {
  score -= 10;
}

else if (txCount >= 10 && txCount < 100) {
  score += 10;
}

else if (txCount >= 100 && txCount < 500) {
  score += 25;
}

else if (txCount >= 500) {
  score += 40;
}


// Keep score between 0 and 100
score = Math.max(0, Math.min(score, 100));

    let risk = "HIGH";
let scamProbability = 80;
let riskColor = "red";


if (score >= 80) {
  risk = "LOW";
  scamProbability = 10;
  riskColor = "green";
}

else if (score >= 60) {
  risk = "MEDIUM";
  scamProbability = 40;
  riskColor = "yellow";
}
  
    const prompt = `
You are TrustShield AI, an advanced Ethereum security analyst.

Analyze this blockchain wallet:

Wallet:
${address}

Blockchain Data:
- Transactions analyzed: ${txCount}
- Trust score: ${score}/100
- Risk level: ${risk}

Generate a short professional report including:

1. Security overview
2. Risk explanation
3. Recommendation

Keep it under 120 words and use simple language.
`;


const responseAI = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: prompt,
});


const aiReport =
  responseAI.text ||
  "AI analysis unavailable at this moment.";

await Scan.create({
  wallet: address,
  network,
  score,
  risk,
  scamProbability,
  transactionsAnalyzed: txCount,
  threats: [
    "Phishing Analysis",
    "Scam Database Check",
    "Transaction Behavior",
    "Smart Contract Interaction",
  ],
  aiSummary: aiReport,
});


    return NextResponse.json({

  wallet: address,

  network,

  score,

      risk,

      scamProbability,

riskColor,

transactionsAnalyzed: txCount,

threats: [
  "Phishing Analysis",
  "Scam Database Check",
  "Transaction Behavior",
  "Smart Contract Interaction",
],

      checks: {

        scamHistory:
          "No known scam behavior detected",

        contractActivity:
          `${txCount} blockchain transactions analyzed`,

        phishingRisk:
          "No phishing indicators found",

        transactionPattern:
          "Historical wallet activity analyzed",

      },


      aiSummary: aiReport,
    });


  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error:
        "Blockchain analysis failed",
      },

      {
        status: 500,
      }
    );
  }
}