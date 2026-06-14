export default function Loading() {
  return (
    <main
      className="
      min-h-screen
      bg-black
      text-white
      flex
      flex-col
      items-center
      justify-center
      "
    >

      <div
        className="
        w-20
        h-20
        rounded-full
        border-4
        border-cyan-500
        border-t-transparent
        animate-spin
        "
      />

      <h2
        className="
        mt-8
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
      </h2>

      <p className="mt-4 text-gray-400">
        Initializing security intelligence...
      </p>

    </main>
  );
}