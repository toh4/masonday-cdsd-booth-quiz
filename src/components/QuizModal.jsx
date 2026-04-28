import { useEffect, useState } from "react";
import ResultEffect from "./ResultEffect";

function QuizModal({ selectedPiece, onClose, onCorrect }) {
  const [answerInput, setAnswerInput] = useState("");
  const [result, setResult] = useState(null);
  const [showHintButton, setShowHintButton] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const [shakeInput, setShakeInput] = useState(false);

  useEffect(() => {
    setAnswerInput("");
    setResult(null);
    setShowHintButton(false);
    setHintVisible(false);
    setShakeInput(false);
  }, [selectedPiece]);

  useEffect(() => {
    if (!result) return;

    const timer = setTimeout(() => {
      setResult(null);
    }, 1800);

    return () => clearTimeout(timer);
  }, [result]);

  if (!selectedPiece) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const userAnswer = answerInput.trim().toLowerCase();
    const correctAnswer = selectedPiece.answer.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      setResult("correct");
      setShowHintButton(false);
      setHintVisible(false);
      onCorrect(selectedPiece.id);
    } else {
      setResult("wrong");
      setShowHintButton(true);
      setShakeInput(true);

      setTimeout(() => {
        setShakeInput(false);
      }, 400);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-indigo-500">
              CDSD Booth Quiz
            </p>
            <h2 className="text-2xl font-black text-slate-900">
              Quiz {selectedPiece.id}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-slate-100 px-3 py-2 text-lg font-bold text-slate-600 active:scale-95"
          >
            ✕
          </button>
        </div>

        <div className="rounded-2xl bg-indigo-50 p-4">
          <p className="text-sm font-bold text-indigo-500">Clue</p>
          <p className="mt-1 text-lg font-semibold text-slate-800">
            {selectedPiece.clue}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-5">
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Enter your answer
          </label>

          <input
            value={answerInput}
            onChange={(e) => setAnswerInput(e.target.value)}
            placeholder="Type your answer here"
            className={`w-full rounded-2xl border-2 px-4 py-4 text-lg outline-none transition focus:border-indigo-500 ${
              shakeInput ? "shake border-red-500" : "border-slate-200"
            }`}
          />

          <button
            type="submit"
            className="mt-4 w-full rounded-2xl bg-indigo-600 py-4 text-lg font-black text-white shadow-lg active:scale-95"
          >
            Submit Answer
          </button>
        </form>

        <ResultEffect result={result} />

        {showHintButton && !hintVisible && (
          <button
            onClick={() => setHintVisible(true)}
            className="mt-4 w-full rounded-2xl bg-yellow-300 py-3 font-bold text-slate-900 active:scale-95"
          >
            Show Hint
          </button>
        )}

        {hintVisible && (
          <div className="mt-4 rounded-2xl bg-yellow-100 p-4 text-slate-800">
            <p className="text-sm font-bold text-yellow-700">Hint</p>
            <p className="mt-1">{selectedPiece.hint}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizModal;