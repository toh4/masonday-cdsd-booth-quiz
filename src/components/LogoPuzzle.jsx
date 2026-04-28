import PuzzlePiece from "./PuzzlePiece";

function LogoPuzzle({ quizData, completedPieces, onSelectPiece }) {
  return (
    <div className="mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border-4 border-white bg-black shadow-2xl">
      <div className="flex h-full w-full">
        {quizData.map((piece, index) => (
          <PuzzlePiece
            key={piece.id}
            piece={piece}
            index={index}
            isCompleted={completedPieces.includes(piece.id)}
            onClick={onSelectPiece}
          />
        ))}
      </div>
    </div>
  );
}

export default LogoPuzzle;