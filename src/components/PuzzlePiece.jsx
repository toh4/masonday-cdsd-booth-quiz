function PuzzlePiece({ piece, index, isCompleted, onClick }) {
  const handleClick = () => {
    if (!isCompleted) {
      onClick(piece);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flip-wrapper relative h-full flex-1 overflow-hidden border-b-4 border-white last:border-b-0"
      aria-label={`Open quiz ${piece.id}`}
    >
      <div
        className={`flip-inner relative h-full w-full ${
          isCompleted ? "flipped" : "active:scale-105"
        }`}
      >
        {/* Front side: black quiz cover */}
        <div className="flip-face absolute inset-0 flex items-center justify-center bg-black">
          <span className="text-center text-3xl font-black tracking-widest text-white">
            Quiz {piece.id}
          </span>
        </div>

        {/* Back side: logo piece */}
        <div
          className="flip-face flip-back absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/cdsd-logo.png')",
            backgroundSize: "100% 300%",
            backgroundPosition: `center ${index * 50}%`,
          }}
        >
          {isCompleted && (
            <div className="flex h-full w-full items-center justify-center bg-green-500/20">
              <div className="rounded-full bg-white p-2 text-3xl shadow-lg">
                ✅
              </div>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}

export default PuzzlePiece;