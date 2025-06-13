
const quizData = [
  {
    sentence: "She wouldn't _____ that I was right.",
    answer: "admit",
    translation: "갠 내가 맞았다는 걸 <b style='color:#e91e63'>인정하려고</b> 하질 않더라."
  },
  {
    sentence: "He couldn't _____ the truth.",
    answer: "hide",
    translation: "그는 진실을 <b style='color:#e91e63'>숨길 수</b> 없었어."
  },
  {
    sentence: "They _____ the test easily.",
    answer: "passed",
    translation: "그들은 시험을 <b style='color:#e91e63'>쉽게 통과했어</b>."
  }
];
let current = 0;
let xp = 0;
let level = 1;

function loadQuestion() {
  const quiz = quizData[current];
  document.getElementById("sentence").innerHTML = quiz.sentence;
  document.getElementById("translation").innerHTML = quiz.translation;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").innerText = "";
}
function checkAnswer() {
  const input = document.getElementById("answer").value.trim().toLowerCase();
  const correct = quizData[current].answer;
  if (input === correct) {
    xp += 50;
    if (xp >= 100) {
      level += 1;
      xp = 0;
    }
    document.getElementById("xp").innerText = xp;
    document.getElementById("level").innerText = level;
    document.getElementById("feedback").innerText = "정답이야! 🎉 레벨업 꾹꾹이~";
  } else {
    document.getElementById("feedback").innerText = "아깝다 경이! 다시 도전해봐!";
  }
}
function showHint() {
  const answer = quizData[current].answer;
  document.getElementById("feedback").innerText = "힌트: " + answer[0].toUpperCase();
}
function nextQuestion() {
  current = (current + 1) % quizData.length;
  loadQuestion();
}
window.onload = loadQuestion;
