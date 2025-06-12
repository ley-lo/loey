
const questions = [
  { sentence: "She wouldn't _____ that I was right.", answer: "admit", hint: "a____" },
  { sentence: "Please _____ the form by tomorrow.", answer: "submit", hint: "s_____" },
  { sentence: "I can't _____ to buy a new phone.", answer: "afford", hint: "a_____" }
];

let current = 0;
let xp = 0;
let level = 1;

function renderQuestion() {
  const q = questions[current];
  document.getElementById("quiz-container").innerHTML = `
    <p><strong>${q.sentence}</strong></p>
    <input type="text" id="answer-input" placeholder="정답을 입력하세요"/>
    <div id="feedback"></div>
  `;
}

function nextQuestion() {
  const userAnswer = document.getElementById("answer-input")?.value.trim().toLowerCase();
  const correct = questions[current].answer;
  if (userAnswer === correct) {
    xp += 25;
    if (xp >= 100) {
      level++;
      xp = 0;
    }
    document.getElementById("level").textContent = level;
    document.getElementById("xp").textContent = xp;
    current++;
    if (current >= questions.length) {
      document.getElementById("quiz-container").innerHTML = "<p>🎉 모든 문제를 완료했어요, 경이!</p>";
    } else {
      renderQuestion();
    }
  } else {
    document.getElementById("feedback").textContent = "❌ 오답이에요! 다시 시도해봐요!";
  }
}

function showHint() {
  const hint = questions[current].hint;
  alert("힌트: " + hint);
}

renderQuestion();
