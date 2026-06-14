"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function ScannerPage() {

 const [address, setAddress] = useState("");

const [loading, setLoading] = useState(false);

const [result, setResult] = useState<any>(null);
const [network, setNetwork] = useState("ethereum");


const riskColorClass =
  result?.riskColor === "green"
    ? "text-green-400"
    : result?.riskColor === "yellow"
    ? "text-yellow-400"
    : "text-red-400";

  const scanWallet = async () => {
  
  if (!address.startsWith("0x")) {
  alert("Please enter a valid wallet address");
  return;
}

  try {

    setLoading(true);

    const response = await fetch("/api/scan", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
  address,
  network,
}),
    });


    const data = await response.json();


    if (!response.ok) {
      throw new Error(data.error);
    }


    setResult(data);


  } catch (error) {

    console.error(error);

    alert(
  "TrustShield AI failed to analyze this wallet. Please check the address or try again."
);

  } finally {

    setLoading(false);

  }

};


  return (

<>

<Navbar />

<main
    className="
    min-h-screen
    bg-black
    text-white
    px-6
    py-20
    "
  >

  {/* Header */}

  <div className="max-w-5xl mx-auto">


  <div
    className="
    inline-block
    px-5
    py-2
    rounded-full
    bg-cyan-500/10
    text-cyan-400
    border
    border-cyan-500/30
    "
  >

  🛡️ TrustShield AI Scanner

  </div>


  <h1
    className="
    text-5xl
    md:text-7xl
    font-black
    mt-8
    "
  >

  Analyze Any Ethereum Wallet

  </h1>


  <p
    className="
    text-gray-400
    mt-6
    text-xl
    max-w-3xl
    "
  >

  Enter a wallet address and let TrustShield AI
  analyze blockchain activity, detect threats,
  and calculate a security score.

  </p>


  {/* Input Box */}

  <div
    className="
    mt-12
    bg-white/5
    border
    border-white/10
    rounded-3xl
    p-6
    "
  >
    <div className="mb-5">

<p className="text-gray-400 mb-2">
Select Blockchain Network
</p>

<select
  value={network}
  onChange={(e) => setNetwork(e.target.value)}
  className="
  w-full
  bg-black
  border
  border-white/20
  rounded-xl
  p-4
  outline-none
  focus:border-cyan-500
  "
>
  <option value="ethereum">
    🟦 Ethereum Mainnet
  </option>

  <option value="polygon">
    🟣 Polygon
  </option>

  <option value="base">
    🔵 Base
  </option>

  <option value="arbitrum">
    🔷 Arbitrum
  </option>

</select>

</div>

  <label className="text-gray-400">

  Ethereum Wallet Address

  </label>


  <input

    value={address}

    onChange={(e)=>
      setAddress(e.target.value)
    }

    placeholder="
    0x742d35Cc6634C0532925a3b844Bc454e4438f44e
    "

    className="
    mt-4
    w-full
    bg-black
    border
    border-white/20
    rounded-xl
    p-4
    outline-none
    focus:border-cyan-500
    "
  />


  <button

  onClick={scanWallet}
  disabled={loading}

  className="
  mt-5
  w-full
  bg-gradient-to-r
  from-cyan-500
  to-blue-600
  py-4
  rounded-xl
  font-bold
  hover:scale-[1.02]
  transition
  "

  >

  {
  loading
    ? "🔄 Analyzing Wallet..."
    : "🔎 Scan Wallet"
  }

  </button>


  </div>

    {/* ======================
        AI ANALYSIS RESULT
  ======================= */}

  {
    result && (

    <div
      className="
      mt-10
      bg-white/5
      border
      border-cyan-500/30
      rounded-3xl
      p-8
      backdrop-blur-xl
      "
    >

    {/* Top Section */}

    <div
      className="
      flex
      flex-col
      md:flex-row
      justify-between
      md:items-center
      gap-6
      "
    >

      <div>

      <p className="text-gray-400">
      Wallet Security Score
      </p>


      <h2
  className={`text-7xl font-black mt-2 ${riskColorClass}`}
>
  {result.score}/100
</h2>


<p
  className={`mt-3 ${riskColorClass}`}
>
  🟢 {result.risk} Risk Wallet
</p>


<div className="mt-6 bg-white/5 rounded-xl p-4 border border-white/10">

  <p className="text-gray-400">
    Scam Probability
  </p>

  <h3 className={`text-3xl font-bold ${riskColorClass}`}>
       {result.scamProbability}%
  </h3>

</div>

    </div>

   <div
className={`
px-6
py-4
rounded-2xl
border
${
  result.risk === "LOW"
    ? "bg-green-500/10 border-green-500/30"

    : result.risk === "MEDIUM"
    ? "bg-yellow-500/10 border-yellow-500/30"

    : "bg-red-500/10 border-red-500/30"
}
`}
>
    

      <h3
className={`font-bold ${riskColorClass}`}
>
{
 result.risk === "LOW"
 ? "🟢 SECURE"

 : result.risk === "MEDIUM"
 ? "🟡 CAUTION"

 : "🔴 HIGH RISK"
}
</h3>

      <p className="text-gray-400 text-sm mt-2">
       {
 result.risk === "LOW"
 ? "Wallet appears trustworthy based on current analysis."

 : result.risk === "MEDIUM"
 ? "Further verification is recommended before interaction."

 : "Avoid interacting with this wallet until further investigation."
}
      </p>

    </div>

  </div>

    {/* Security Checks */}

    <div
      className="
      grid
      md:grid-cols-2
      gap-5
      mt-10
      "
    >


    <div className="
      bg-black/40
      p-5
      rounded-2xl
      border
      border-white/10
      ">

      <h3 className="font-bold">
      ✅ Scam History Check
      </h3>

      <p className="text-gray-400 mt-2">
      {result.checks.scamHistory}
      </p>

    </div>



    <div className="
      bg-black/40
      p-5
      rounded-2xl
      border
      border-white/10
      ">

      <h3 className="font-bold">
      🔗 Smart Contract Activity
      </h3>

      <p className="text-gray-400 mt-2">
      {result.checks.contractActivity}
      </p>

    </div>



    <div className="
      bg-black/40
      p-5
      rounded-2xl
      border
      border-white/10
      ">

      <h3 className="font-bold">
      🌐 Phishing Detection
      </h3>

      <p className="text-gray-400 mt-2">
      {result.checks.phishingRisk}
      </p>

    </div>



    <div className="
      bg-black/40
      p-5
      rounded-2xl
      border
      border-white/10
      ">

      <h3 className="font-bold">
      🤖 AI Recommendation
      </h3>

      <p className="text-gray-400 mt-2">
      {
  result.risk === "LOW"
    ? "This wallet appears secure. Continue normal usage while maintaining standard security practices."

    : result.risk === "MEDIUM"
    ? "Exercise caution. Review transactions and verify unknown smart contract interactions."

    : "High risk detected. Avoid interacting with this wallet until further investigation is completed."
}
      </p>

    </div>


    </div>


    {/* AI Analysis Summary */}

    <div
      className="
      mt-8
      rounded-2xl
      bg-gradient-to-r
      from-cyan-500/10
      to-purple-500/10
      border
      border-cyan-500/20
      p-6
      "
    >

      <h3 className="
      text-cyan-400
      font-bold
      text-xl
      ">

      🧠 TrustShield AI Summary

      </h3>


      <p className="mt-3 text-gray-300">

        {result.aiSummary}

      </p>


    </div>


{/* Threat Intelligence */}

<div className="mt-8">

  <h3 className="text-xl font-bold mb-4">
    🛡 Threat Intelligence
  </h3>


  <div className="grid md:grid-cols-2 gap-4">

    {
      result.threats?.map(
        (threat: string, index: number) => (

          <div
            key={index}
            className="
            bg-red-500/10
            border
            border-red-500/30
            rounded-xl
            p-4
            "
          >

            🚨 {threat}

          </div>

        )
      )
    }

  </div>

</div>

<div className="
mt-8
grid
md:grid-cols-4
gap-5
">

<div className="
bg-white/5
border
border-white/10
rounded-2xl
p-5
">

<p className="text-gray-400">
Wallet
</p>

<p className="mt-2 font-bold break-all">
{result.wallet}
</p>

</div>


<div className="
bg-white/5
border
border-white/10
rounded-2xl
p-5
">

<p className="text-gray-400">
Network
</p>

<div
className="
bg-white/5
border
border-white/10
rounded-2xl
p-5
"
>

<p className="text-gray-400">
Transactions
</p>

<p className="mt-2 font-bold text-purple-400">
{result.transactionsAnalyzed}
</p>

</div>

<p className="mt-2 font-bold text-cyan-400">
Ethereum Mainnet
</p>

</div>


<div className="
bg-white/5
border
border-white/10
rounded-2xl
p-5
">

<p className="text-gray-400">
Scan Time
</p>

<p className="mt-2 font-bold text-green-400">
{new Date().toLocaleString()}
</p>
</div>
</div>

</div>

    )
  }

    {/* ======================
        EXTRA ACTIONS
  ======================= */}

  {result && (

<div
  className="
  mt-16
  flex
  flex-col
  md:flex-row
  gap-5
  justify-center
  "
>

<a
  href="/"
  className="
  px-8
  py-4
  rounded-2xl
  bg-white/5
  border
  border-white/10
  hover:bg-white/10
  transition
  text-center
  "
>
  🏠 Back To Homepage
</a>


<button
  onClick={() => {
    setAddress("");
    setResult(null);
  }}
  className="
  px-8
  py-4
  rounded-2xl
  bg-gradient-to-r
  from-red-500
  to-orange-500
  font-bold
  hover:scale-105
  transition
  "
>
  🔄 New Scan
</button>

</div>

)}

  {/* Footer */}

  <footer className="mt-20 text-center border-t border-white/10 pt-8">
    <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
      🛡 TrustShield AI
    </h3>

    <p className="text-gray-500 mt-3">AI-powered Web3 security intelligence for Ethereum users.</p>

    <p className="text-gray-600 text-sm mt-5">© 2026 TrustShield AI. Securing the decentralized future.</p>
  </footer>

  </div>

</main>

</>
  );
}