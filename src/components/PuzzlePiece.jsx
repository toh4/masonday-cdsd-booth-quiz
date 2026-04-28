function PuzzlePiece({ piece, index, isCompleted, onClick }) {
  return (
    <button
      onClick={() => onClick(piece)}
      className="relative h-full flex-1 overflow-hidden border-r border-white/70 last:border-r-0 transition active:scale-95"
      aria-label={`Open quiz ${piece.id}`}
    >
      <div
        className="h-full w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/cdsd-logo.png')",
          backgroundSize: "300% 100%",
          backgroundPosition: `${index * 50}% center`,
        }}
      />

      <div className="absolute inset-0 bg-black/0 transition hover:bg-black/10" />

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-slate-800 shadow">
        Quiz {piece.id}
      </div>

      {isCompleted && (
        <div className="absolute inset-0 flex items-center justify-center bg-green-500/30">
          <div className="rounded-full bg-white p-3 text-4xl shadow-lg">✅</div>
        </div>
      )}
    </button>
  );
}

export default PuzzlePiece;