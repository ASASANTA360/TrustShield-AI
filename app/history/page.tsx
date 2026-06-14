"use client";

import { useEffect, useState } from "react";
import SecurityCharts from "@/components/SecurityCharts";
import Navbar from "@/components/Navbar";

export default function HistoryPage() {

const [scans, setScans] = useState<any[]>([]);
const [loading, setLoading] = useState(true);
const [search, setSearch] = useState("");

const [filter, setFilter] = useState("ALL");


useEffect(() => {

  const fetchHistory = async () => {
  

    try {

      const response = await fetch("/api/history");

      const data = await response.json();

      setScans(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  fetchHistory();

}, []);

const filteredScans = scans.filter((scan) => {

  const matchWallet =
    scan.wallet
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchRisk =
    filter === "ALL" ||
    scan.risk === filter;

  return matchWallet && matchRisk;

});


const totalScans = scans.length;


const lowRisk = scans.filter(
  (scan) => scan.risk === "LOW"
).length;


const mediumRisk = scans.filter(
  (scan) => scan.risk === "MEDIUM"
).length;


const highRisk = scans.filter(
  (scan) => scan.risk === "HIGH"
).length;

const ethereumScans = scans.filter(
  (scan) => scan.network === "ethereum"
).length;


const polygonScans = scans.filter(
  (scan) => scan.network === "polygon"
).length;


const baseScans = scans.filter(
  (scan) => scan.network === "base"
).length;


const arbitrumScans = scans.filter(
  (scan) => scan.network === "arbitrum"
).length;

const healthScore = Math.round(
  totalScans === 0
    ? 100
    : ((lowRisk * 100) / totalScans)
);


const highestRisk =
  highRisk > mediumRisk
    ? "High-risk wallets require urgent attention"
    : "Risk levels are currently stable";


const recommendation =
  highRisk > 0
    ? "Increase monitoring of suspicious wallets and smart contracts."
    : "The ecosystem currently appears healthy.";

return (

<>

<Navbar />

<main className="
min-h-screen
bg-black
text-white
p-8
">

<h1 className="
text-5xl
font-black
mb-10
bg-gradient-to-r
from-cyan-400
to-purple-500
bg-clip-text
text-transparent
">

📜 TrustShield Scan History

</h1>

<div
className="
grid
grid-cols-2
md:grid-cols-4
gap-4
mb-8
"
>

<div className="
bg-cyan-500/10
border
border-cyan-500/30
rounded-2xl
p-5
">
<p className="text-gray-400">
Total Scans
</p>

<h2 className="text-3xl font-black">
📊 {totalScans}
</h2>

</div>


<div className="
bg-green-500/10
border
border-green-500/30
rounded-2xl
p-5
">

<p className="text-gray-400">
Safe Wallets
</p>

<h2 className="text-3xl font-black text-green-400">
🟢 {lowRisk}
</h2>

</div>


<div className="
bg-yellow-500/10
border
border-yellow-500/30
rounded-2xl
p-5
">

<p className="text-gray-400">
Medium Risk
</p>

<h2 className="text-3xl font-black text-yellow-400">
🟡 {mediumRisk}
</h2>

</div>


<div className="
bg-red-500/10
border
border-red-500/30
rounded-2xl
p-5
">

<p className="text-gray-400">
High Risk
</p>

<h2 className="text-3xl font-black text-red-400">
🔴 {highRisk}
</h2>

</div>

</div>


{/* Network Analytics */}

<div className="
grid
grid-cols-2
md:grid-cols-4
gap-4
mb-8
">

<div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-5">
<p className="text-gray-400">Ethereum</p>
<h3 className="text-3xl font-black text-blue-400">
🟦 {ethereumScans}
</h3>
</div>

<div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-5">
<p className="text-gray-400">Polygon</p>
<h3 className="text-3xl font-black text-purple-400">
🟣 {polygonScans}
</h3>
</div>

<div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-5">
<p className="text-gray-400">Base</p>
<h3 className="text-3xl font-black text-cyan-400">
🔵 {baseScans}
</h3>
</div>

<div className="bg-indigo-500/10 border border-indigo-500/30 rounded-2xl p-5">
<p className="text-gray-400">Arbitrum</p>
<h3 className="text-3xl font-black text-indigo-400">
🔷 {arbitrumScans}
</h3>
</div>

</div>
<div className="
mb-8
bg-gradient-to-r
from-cyan-500/10
to-purple-500/10
border
border-cyan-500/20
rounded-3xl
p-6
">

<h2 className="
text-2xl
font-black
text-cyan-400
">
🧠 TrustShield AI Intelligence
</h2>


<div className="
grid
md:grid-cols-3
gap-5
mt-5
">

<div>
<p className="text-gray-400">
Security Health
</p>

<h3 className="text-3xl font-black text-green-400">
{healthScore}%
</h3>
</div>


<div>
<p className="text-gray-400">
Risk Insight
</p>

<p className="font-bold text-red-400">
{highestRisk}
</p>
</div>


<div>
<p className="text-gray-400">
Recommendation
</p>

<p className="font-bold text-cyan-300">
{recommendation}
</p>
</div>

</div>

</div>
<SecurityCharts
  lowRisk={lowRisk}
  mediumRisk={mediumRisk}
  highRisk={highRisk}
  ethereum={ethereumScans}
  polygon={polygonScans}
  base={baseScans}
  arbitrum={arbitrumScans}
/>


{/* Search & Filter */}

<div className="
mb-8
flex
flex-col
md:flex-row
gap-4
">

<input
value={search}
onChange={(e) => setSearch(e.target.value)}
placeholder="🔎 Search wallet address..."
className="
flex-1
bg-white/5
border
border-white/10
rounded-xl
p-4
outline-none
focus:border-cyan-500
"
/>

<select
value={filter}
onChange={(e) => setFilter(e.target.value)}
className="
bg-white/5
border
border-white/10
rounded-xl
p-4
"
>

<option value="ALL">ALL RISK</option>
<option value="LOW">🟢 LOW</option>
<option value="MEDIUM">🟡 MEDIUM</option>
<option value="HIGH">🔴 HIGH</option>

</select>

</div>


{
loading ? (

<p className="text-gray-400">
Loading scan history...
</p>

) : filteredScans.length === 0 ? (

<p className="text-red-400">
No scan history found.
</p>

) : (

<div className="grid gap-5">

{filteredScans.map((scan) => (

<div
key={scan._id}
className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
"
>

<p className="font-bold break-all">
{scan.wallet}
</p>

<p className="mt-2">
Risk:
<span className={
scan.risk === "LOW"
? " text-green-400"
: scan.risk === "MEDIUM"
? " text-yellow-400"
: " text-red-400"
}>
 {scan.risk}
</span>
</p>

<p className="text-gray-400 mt-2">
{scan.network} • {scan.score}/100 • {scan.scamProbability}% scam probability
</p>

<p className="text-cyan-400 mt-4">
🧠 {scan.aiSummary}
</p>

</div>

))}

</div>

)
}


</main>

</>

);

}