const questions = [
  {
    sentence: "She wouldn't _____ that I was right.",
    translation: "갠 내가 맞았다는 걸 <span class='highlight'>인정하려고</span> 하질 않더라.",
    answer: "admit"
  },
  {
    sentence: "They decided to _____ the meeting.",
    translation: "그들은 회의를 <span class='highlight'>연기하기로</span> 결정했어.",
    answer: "postpone"
  },
  {
    sentence: "He couldn't _____ the truth.",
    translation: "그는 진실을 <span class='highlight'>숨길 수</span> 없었어.",
    answer: "hide"
  }
];

let current = 0;
let xp = 0;
let level = 1;
let hintIndex = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("sentence").innerText = q.sentence;
  document.getElementById("translation").innerHTML = q.translation;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").innerText = "";
  hintIndex = 0;
}

function checkAnswer() {
  const input = document.getElementById("answer").value.trim().toLowerCase();
  const q = questions[current];
  if (input === q.answer) {
    document.getElementById("feedback").innerText = "정답이야! 🎉 레벨업 꾹꾹이~";
    xp += 50;
    if (xp >= 100) {
      level++;
      xp = 0;
      document.getElementById("level").innerText = level;
    }
    document.getElementById("xp").innerText = xp;
  } else {
    document.getElementById("feedback").innerText = "틀렸어! 다시 해보자! 🐾";
  }
}

function showHint() {
  const q = questions[current];
  const hint = q.answer.slice(0, ++hintIndex);
  document.getElementById("feedback").innerText = "힌트: " + hint;
}

function nextQuestion() {
  current = (current + 1) % questions.length;
  loadQuestion();
}

window.onload = loadQuestion;
