
const problems = [
  {
    sentence: "She wouldn't _____ that I was right.",
    translation: "갠 내가 맞았다는 걸 인정하려고 하질 않더라.",
    answer: "admit"
  },
  {
    sentence: "He couldn't _____ the truth.",
    translation: "그는 진실을 숨길 수 없었어.",
    answer: "hide"
  }
];
let current = 0;
let xp = 0;
let level = 1;
let hintIndex = 1;

function loadQuestion() {
  const q = problems[current];
  document.getElementById("question").textContent = q.sentence;
  document.getElementById("translation").textContent = q.translation;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("catLine").textContent = `"경이~ 오늘도 꽉꽉이 해보자!" 🐱`;
  hintIndex = 1;
}
function checkAnswer() {
  const userAns = document.getElementById("answer").value.trim().toLowerCase();
  const correct = problems[current].answer;
  if (userAns === correct) {
    xp += 50;
    if (xp >= 100) {
      xp = 0;
      level += 1;
    }
    document.getElementById("feedback").textContent = "정답이야! 🎉 레벨업 꽉꽉이~";
    document.getElementById("level").textContent = level;
    document.getElementById("xp").textContent = xp;
  } else {
    document.getElementById("feedback").textContent = "아깝다 경이! 다시 도전해봐!";
  }
}
function showHint() {
  const answer = problems[current].answer;
  if (hintIndex <= answer.length) {
    const hint = answer.slice(0, hintIndex);
    document.getElementById("answer").value = hint;
    hintIndex++;
  }
}
function nextQuestion() {
  current = (current + 1) % problems.length;
  loadQuestion();
}

window.onload = loadQuestion;
