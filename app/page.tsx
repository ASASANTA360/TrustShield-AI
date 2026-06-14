"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Home() {

  // Wallet state
  const [wallet, setWallet] =
    useState<string | null>(null);


  // Connect MetaMask
  const connectWallet = async () => {

    try {

      if (!window.ethereum) {
        alert(
          "Please install MetaMask"
        );
        return;
      }


      const accounts =
        await window.ethereum.request({
          method: "eth_requestAccounts",
        });


      setWallet(accounts[0]);

    } catch (error) {

      console.error(error);

      alert(
        "Wallet connection failed"
      );

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
overflow-hidden
relative
"
>


{/* Background Effects */}

<div className="
fixed
inset-0
-z-10
">


<div
className="
absolute
top-0
left-0
w-[500px]
h-[500px]
rounded-full
bg-cyan-500/20
blur-[200px]
animate-pulse
"
/>


<div
className="
absolute
bottom-0
right-0
w-[500px]
h-[500px]
rounded-full
bg-purple-500/20
blur-[200px]
animate-pulse
"
/>


</div>



{/* Navbar */}

<nav
className="
sticky
top-0
z-50
bg-black/30
backdrop-blur-xl
border-b
border-white/10
"
>


<div
className="
max-w-7xl
mx-auto
px-6
py-5
flex
items-center
justify-between
"
>


{/* Logo */}

<div>

<h1
className="
text-3xl
font-black
bg-gradient-to-r
from-cyan-400
to-purple-500
bg-clip-text
text-transparent
"
>

🛡 TRUSTSHIELD AI

</h1>


<p className="
text-gray-400
text-xs
">

Open AI Security Infrastructure

</p>


</div>



{/* Menu */}

<div
className="
hidden
md:flex
gap-8
text-gray-300
"
>

<span className="hover:text-white cursor-pointer">
Features
</span>


<span className="hover:text-white cursor-pointer">
Docs
</span>


<span className="hover:text-white cursor-pointer">
Community
</span>


<span className="hover:text-white cursor-pointer">
GitHub
</span>


</div>



{/* Wallet Button */}

<button

onClick={connectWallet}

className="
px-5
py-3
rounded-xl
font-bold
bg-gradient-to-r
from-orange-500
to-yellow-500
hover:scale-105
transition
shadow-lg
shadow-orange-500/40
"

>

{
wallet
?
`🦊 ${wallet.slice(0,6)}
...${wallet.slice(-4)}`
:
"🦊 Connect Wallet"
}

</button>


</div>


</nav>

{/* =====================
       HERO SECTION
===================== */}

<section
className="
max-w-7xl
mx-auto
px-6
py-20
grid
lg:grid-cols-2
gap-14
items-center
"
>


{/* LEFT SIDE */}

<div>


<div
className="
inline-flex
items-center
px-5
py-2
rounded-full
bg-cyan-500/10
border
border-cyan-500/30
text-cyan-300
mb-6
"
>

⚡ AI + Ethereum + Open Source Security

</div>



<h1
className="
text-5xl
md:text-7xl
font-black
leading-tight
"
>

Protect The Future Of

<span
className="
block
bg-gradient-to-r
from-cyan-400
via-blue-500
to-purple-500
bg-clip-text
text-transparent
"
>

Web3 Security

</span>

</h1>



<p
className="
mt-8
text-lg
text-gray-400
leading-relaxed
"
>

TrustShield AI is an open-source
AI security infrastructure designed
to protect Ethereum users from
scams, phishing attacks, malicious
smart contracts, and digital threats.

</p>



{/* Hero Buttons */}


<div
className="
mt-10
flex
flex-wrap
gap-4
"
>


<button
className="
px-8
py-4
rounded-2xl
font-bold
bg-gradient-to-r
from-cyan-500
to-blue-600
shadow-xl
shadow-cyan-500/30
hover:scale-105
transition
"
>

🛡 Launch Scanner

</button>



<button
className="
px-8
py-4
rounded-2xl
border
border-white/20
bg-white/5
hover:bg-white/10
transition
"
>

⭐ View GitHub

</button>


</div>



{/* Trust Features */}


<div
className="
mt-12
grid
grid-cols-2
gap-4
text-gray-300
"
>


<div>
🦊 Wallet Security
</div>


<div>
🔗 Contract Scanner
</div>


<div>
🌐 Phishing Detector
</div>


<div>
🧠 AI Risk Engine
</div>


</div>


</div>




{/* ======================
      AI ENGINE CARD
====================== */}


<div
className="
relative
"
>


{/* Glow */}

<div
className="
absolute
inset-0
bg-gradient-to-r
from-cyan-500
to-purple-600
blur-3xl
opacity-30
rounded-3xl
"
/>


<div
className="
relative
rounded-3xl
bg-white/5
border
border-white/10
backdrop-blur-xl
p-8
shadow-2xl
"
>


<div
className="
flex
justify-between
items-center
"
>


<h2
className="
text-2xl
font-black
"
>

TrustShield AI Engine

</h2>


<div
className="
px-3
py-1
rounded-full
bg-green-500/20
text-green-400
text-sm
animate-pulse
"
>

● ONLINE

</div>


</div>



{/* AI Status */}


<div
className="
mt-8
space-y-4
"
>


<div
className="
bg-black/40
border
border-white/10
rounded-2xl
p-4
"
>

🤖 AI Detection System

<p className="text-cyan-400 mt-2">

Analyzing blockchain risks
in real-time

</p>

</div>



<div
className="
bg-black/40
border
border-white/10
rounded-2xl
p-4
"
>

🔐 Security Intelligence

<p className="text-green-400 mt-2">

Wallet reputation,
contracts and phishing analysis

</p>

</div>



<div
className="
bg-black/40
border
border-cyan-500/30
rounded-2xl
p-5
"
>


<p className="text-gray-400">

AI Detection Accuracy

</p>


<h2
className="
text-6xl
font-black
text-cyan-400
mt-3
"
>

99.2%

</h2>


<p className="text-green-400 mt-2">

Global Threat Monitoring

</p>


</div>


</div>


</div>


</div>


</section>



{/* =====================
     LIVE SECURITY STATS
===================== */}


<section
className="
max-w-7xl
mx-auto
px-6
pb-20
"
>


<div
className="
grid
md:grid-cols-4
gap-5
"
>


<div
className="
rounded-3xl
bg-white/5
border
border-white/10
p-6
text-center
"
>

<h3
className="
text-4xl
font-black
text-cyan-400
"
>
250K+
</h3>

<p className="mt-2 text-gray-400">
Wallets Scanned
</p>

</div>



<div
className="
rounded-3xl
bg-white/5
border
border-white/10
p-6
text-center
"
>

<h3 className="
text-4xl
font-black
text-red-400
">
12K+
</h3>

<p className="mt-2 text-gray-400">
Scams Detected
</p>

</div>



<div
className="
rounded-3xl
bg-white/5
border
border-white/10
p-6
text-center
"
>

<h3 className="
text-4xl
font-black
text-purple-400
">
75K+
</h3>

<p className="mt-2 text-gray-400">
Contracts Analyzed
</p>

</div>



<div
className="
rounded-3xl
bg-white/5
border
border-white/10
p-6
text-center
"
>

<h3 className="
text-4xl
font-black
text-green-400
">
99.2%
</h3>

<p className="mt-2 text-gray-400">
AI Accuracy
</p>

</div>


</div>


</section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold">
            HOW IT WORKS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            AI Security Pipeline
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            TrustShield AI combines artificial intelligence, blockchain
            intelligence, and security analytics to protect users
            from malicious activities.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Wallet Analysis",
              desc: "Analyze wallet behavior, transaction patterns, and on-chain reputation.",
            },
            {
              step: "02",
              title: "AI Risk Engine",
              desc: "Machine learning models detect suspicious patterns and threats.",
            },
            {
              step: "03",
              title: "Threat Detection",
              desc: "Identify scams, phishing links, and malicious smart contracts.",
            },
            {
              step: "04",
              title: "Security Score",
              desc: "Generate an understandable security and trust score.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
            >
              <div className="text-cyan-400 text-3xl font-bold">
                {item.step}
              </div>

              <h3 className="text-xl font-bold mt-4">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* Open Source Mission */}
      <section className="bg-cyan-500/10 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-cyan-400 font-semibold">
            OPEN SOURCE FOR ETHEREUM
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Building a Safer Web3 Future
          </h2>

          <p className="text-gray-300 mt-6 text-lg">
            TrustShield AI is an open-source security infrastructure
            dedicated to protecting Ethereum users against scams,
            fraud, phishing, and malicious smart contracts.
          </p>

          <div className="mt-10 flex justify-center gap-5 flex-wrap">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-semibold">
              Contribute on GitHub
            </button>

            <button className="border border-cyan-500 px-8 py-3 rounded-xl">
              Read Documentation
            </button>
          </div>
        </div>
      </section>


      {/* Roadmap */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
          TrustShield AI Roadmap
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            "Q1 2026 — AI Risk Engine MVP",
            "Q2 2026 — Ethereum Wallet Scanner",
            "Q3 2026 — Smart Contract Analyzer",
            "Q4 2026 — Community Security Network",
          ].map((phase, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
            >
              <h3 className="font-bold text-lg text-cyan-400">
                {phase}
              </h3>
            </div>

          ))}

        </div>

      </section>


      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center">

        <h3 className="text-2xl font-bold">
          TrustShield AI
        </h3>

        <p className="text-gray-500 mt-2">
          Open-source AI security infrastructure for Ethereum.
        </p>

        <p className="text-gray-600 mt-5 text-sm">
          © 2026 TrustShield AI. Built for a safer decentralized future.
        </p>

      </footer>
          </main>
    </>
  );
}