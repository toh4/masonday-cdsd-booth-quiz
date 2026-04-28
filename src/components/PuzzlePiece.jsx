function PuzzlePiece({ piece, index, isCompleted, onClick }) {
  const handleClick = () => {
    if (!isCompleted) {
      onClick(piece);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group relative h-full flex-1 overflow-hidden border-b-4 border-white last:border-b-0"
      aria-label={`Open quiz ${piece.id}`}
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 ${
          isCompleted ? "flip-card-completed" : "group-active:scale-110"
        }`}
      >
        {/* Logo side */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/cdsd-logo.png')",
            backgroundSize: "300% 100%",
            backgroundPosition: `center ${index * 50}%`,
          }}
        />

        {/* Black cover side */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black transition-all duration-500 ${
            isCompleted
              ? "rotate-y-180 opacity-0"
              : "opacity-100 group-hover:scale-105"
          }`}
        >
          <span className="text-2xl font-black tracking-widest text-white text-center">
            Quiz {piece.id}
          </span>
        </div>

        {/* Completed check */}
        {isCompleted && (
          <div className="absolute inset-0 flex items-center justify-center bg-green-500/20">
            <div className="rounded-full bg-white p-2 text-3xl shadow-lg">
              ✅
            </div>
          </div>
        )}
      </div>
    </button>
  );
}

export default PuzzlePiece;