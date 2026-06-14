import Link from "next/link";

export default function Navbar() {

return (

<nav
className="
fixed
top-0
left-0
w-full
z-50
bg-black/80
backdrop-blur-xl
border-b
border-cyan-500/20
"
>

<div
className="
max-w-7xl
mx-auto
px-6
py-4
flex
justify-between
items-center
"
>

{/* Logo */}

<Link
href="/"
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

🛡 TrustShield AI

</Link>


{/* Navigation */}

<div
className="
hidden
md:flex
gap-8
text-gray-300
font-medium
"
>

<Link
href="/"
className="
hover:text-cyan-400
transition
"
>
🏠 Home
</Link>


<Link
href="/scanner"
className="
hover:text-cyan-400
transition
"
>
🔎 Scanner
</Link>


<Link
href="/history"
className="
hover:text-cyan-400
transition
"
>
📜 History
</Link>


<Link
href="/about"
className="
hover:text-cyan-400
transition
"
>
ℹ️ About
</Link>

</div>


{/* Status */}

<div
className="
hidden
md:flex
items-center
gap-2
text-green-400
font-bold
"
>

<div
className="
w-3
h-3
bg-green-400
rounded-full
animate-pulse
"
/>

AI ONLINE

</div>


</div>

</nav>

);

}