const quizData = [
  {
    id: 1,
    clue: "You can find Quiz 1 next to Booth 10",
    options: ["Computer and Data Sciences Delegation", 
              "Computer and Data Sciences Department", 
              "Computational and Data Sciences Delegation", 
              "Computational and Data Sciences Department"],
    correctAnswer: "Computational and Data Sciences Delegation", 
    hint: "Look around the CDSD booth.",
  },
  {
    id: 2,
    clue: "You can find Quiz 2 near Booth 4",
    options: ["A man behind the phone", 
              "Machine learning", 
              "Your phone reads your mind", 
              "Randomly generated"],
    correctAnswer: "Machine learning",
    hint: "It learns from your behavior.",
  },
  {
    id: 3,
    clue: "You can find Quiz 2 near Booth 11",
    options: ["print(hello)", 
              "print(\"hello\")", 
              "print('hello')", 
              "Both B and C"],
    correctAnswer: "Both B and C",
    hint: "It is a way to model real-world systems on a computer.",
  },
];

export default quizData;