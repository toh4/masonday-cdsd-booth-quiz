import { useState } from "react";
import quizData from "./data/quizData";
import LogoPuzzle from "./components/LogoPuzzle";
import QuizModal from "./components/QuizModal.jsx";

function App() {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [completedPieces, setCompletedPieces] = useState([]);

  const handleSelectPiece = (piece) => {
    setSelectedPiece(piece);
  };

  const handleCloseModal = () => {
    setSelectedPiece(null);
  };

  const handleCorrectAnswer = (pieceId) => {
    setCompletedPieces((prev) => {
      if (prev.includes(pieceId)) return prev;
      return [...prev, pieceId];
    });
  };

  const isAllCompleted = completedPieces.length === quizData.length;

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-100 via-white to-yellow-100 px-4 py-8">
      <section className="mx-auto max-w-md text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
          Mason Day 2026
        </p>

        <h1 className="mt-2 text-4xl font-black text-slate-900">
          CDSD Booth Quiz
        </h1>

        <p className="mt-3 text-base text-slate-600">
          Tap each logo piece, find the hidden question, and enter the answer.
        </p>

        <div className="mt-8">
          <LogoPuzzle
            quizData={quizData}
            completedPieces={completedPieces}
            onSelectPiece={handleSelectPiece}
          />
        </div>

        <div className="mt-6 rounded-2xl bg-white/80 p-4 shadow">
          <p className="font-bold text-slate-800">
            Progress: {completedPieces.length} / {quizData.length}
          </p>

          <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-indigo-600 transition-all"
              style={{
                width: `${(completedPieces.length / quizData.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {isAllCompleted && (
          <div className="mt-6 rounded-3xl bg-green-100 p-5 text-green-700 shadow-lg sparkle">
            <div className="text-4xl">🎉</div>
            <p className="mt-2 text-xl font-black">
              CDSD Booth Quiz Completed!
            </p>
          </div>
        )}
      </section>

      <QuizModal
        selectedPiece={selectedPiece}
        onClose={handleCloseModal}
        onCorrect={handleCorrectAnswer}
      />
    </main>
  );
}

export default App;