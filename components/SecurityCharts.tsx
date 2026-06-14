"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";


export default function SecurityCharts({
  lowRisk,
  mediumRisk,
  highRisk,
  ethereum,
  polygon,
  base,
  arbitrum,
}: any) {


const riskData = [
  {
    name: "LOW",
    value: lowRisk,
    color: "#22c55e",
  },

  {
    name: "MEDIUM",
    value: mediumRisk,
    color: "#eab308",
  },

  {
    name: "HIGH",
    value: highRisk,
    color: "#ef4444",
  },
];


const networkData = [
  {
    name: "Ethereum",
    scans: ethereum,
  },

  {
    name: "Polygon",
    scans: polygon,
  },

  {
    name: "Base",
    scans: base,
  },

  {
    name: "Arbitrum",
    scans: arbitrum,
  },
];


return (

<div className="grid md:grid-cols-2 gap-6 mb-8">


{/* Risk Chart */}

<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
">

<h2 className="
text-xl
font-bold
mb-4
text-cyan-400
">

📊 Risk Distribution

</h2>


<div className="h-72">

<ResponsiveContainer>

<PieChart>

<Pie
data={riskData}
dataKey="value"
nameKey="name"
outerRadius={100}
>

{
riskData.map((item, index) => (

<Cell
key={index}
fill={item.color}
/>

))

}

</Pie>

<Tooltip />

</PieChart>

</ResponsiveContainer>

</div>

</div>



{/* Network Chart */}

<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
">

<h2 className="
text-xl
font-bold
mb-4
text-cyan-400
">

🌐 Network Activity

</h2>


<div className="h-72">

<ResponsiveContainer>

<BarChart data={networkData}>

<XAxis dataKey="name" />

<YAxis />

<Tooltip />


<Bar
dataKey="scans"
fill="#06b6d4"
/>

</BarChart>

</ResponsiveContainer>

</div>

</div>


</div>

);

}