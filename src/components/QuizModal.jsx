import { useEffect, useState } from "react";
import ResultEffect from "./ResultEffect";

function QuizModal({ selectedPiece, onClose, onCorrect }) {
  const [result, setResult] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [showHintButton, setShowHintButton] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const [shakeOptions, setShakeOptions] = useState(false);

  useEffect(() => {
    setResult(null);
    setSelectedOption("");
    setShowHintButton(false);
    setHintVisible(false);
    setShakeOptions(false);
  }, [selectedPiece]);

  useEffect(() => {
    if (!result) return;

    const timer = setTimeout(() => {
      setResult(null);
    }, 1800);

    return () => clearTimeout(timer);
  }, [result]);

  if (!selectedPiece) return null;

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    const userAnswer = option.trim().toLowerCase();
    const correctAnswer = selectedPiece.correctAnswer.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      setResult("correct");
      setShowHintButton(false);
      setHintVisible(false);
      onCorrect(selectedPiece.id);
    } else {
      setResult("wrong");
      setShowHintButton(true);
      setShakeOptions(true);

      setTimeout(() => {
        setShakeOptions(false);
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

        <div className="mt-5">
          <p className="mb-3 block text-sm font-bold text-slate-700">
            Choose the correct answer
          </p>

          <div className={`grid gap-3 ${shakeOptions ? "shake" : ""}`}>
            {selectedPiece.options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleOptionClick(option)}
                className={`rounded-2xl border-2 px-4 py-4 text-left text-base font-bold transition active:scale-95 ${
                  selectedOption === option
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                    : "border-slate-200 bg-white text-slate-800 hover:border-indigo-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

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