import Navbar from "@/components/Navbar";

export default function AboutPage() {
return (
<>

<Navbar />

<main className="
min-h-screen
bg-black
text-white
pt-32
px-8
">

<div className="
max-w-6xl
mx-auto
">

<div className="
text-center
">

<h1 className="
text-6xl
font-black
bg-gradient-to-r
from-cyan-400
to-purple-500
bg-clip-text
text-transparent
">

🛡 TrustShield AI

</h1>


<p className="
text-gray-400
text-xl
mt-6
">

The Future of Web3 Security Intelligence

</p>

</div>


<div className="
grid
md:grid-cols-3
gap-6
mt-16
">

<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
">

<h2 className="text-cyan-400 text-2xl font-bold">
🎯 Mission
</h2>

<p className="mt-4 text-gray-300">
Protect blockchain users from scams, fraud,
and malicious activities using AI-powered
security analysis.
</p>

</div>


<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
">

<h2 className="text-cyan-400 text-2xl font-bold">
⚙ Technology
</h2>

<ul className="mt-4 text-gray-300 space-y-2">

<li>🤖 Google Gemini AI</li>
<li>⚡ Next.js</li>
<li>🍃 MongoDB Atlas</li>
<li>⛓ EVM Blockchains</li>

</ul>

</div>


<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
">

<h2 className="text-cyan-400 text-2xl font-bold">
🛡 Features
</h2>

<ul className="mt-4 text-gray-300 space-y-2">

<li>✓ Multi-chain scanning</li>
<li>✓ AI trust scoring</li>
<li>✓ Scam detection</li>
<li>✓ Security analytics</li>

</ul>

</div>

</div>


<div className="
mt-20
text-center
">

<h2 className="
text-3xl
font-black
text-cyan-400
">

Securing The Decentralized Future

</h2>


<p className="
mt-5
text-gray-400
">

TrustShield AI combines blockchain data,
artificial intelligence, and security analytics
to create a safer Web3 ecosystem.

</p>

</div>

</div>

</main>

</>
);
}