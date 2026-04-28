function ResultEffect({ result }) {
  if (!result) return null;

  const isCorrect = result === "correct";

  return (
    <div
      className={`mt-4 rounded-2xl px-4 py-3 text-center font-bold ${
        isCorrect
          ? "bg-green-100 text-green-700 sparkle"
          : "bg-red-100 text-red-700"
      }`}
    >
      <div className="text-3xl">{isCorrect ? "✅ ✨" : "❌"}</div>
      <p className="mt-1">
        {isCorrect ? "Correct! Great job!" : "Incorrect. Try again!"}
      </p>
    </div>
  );
}

export default ResultEffect;