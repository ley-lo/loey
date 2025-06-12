let level = 1;
let xp = 0;
let correctAnswer = "admit";
let hintIndex = 0;

function checkAnswer() {
  const input = document.getElementById("answer").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");

  if (input === correctAnswer) {
    feedback.innerText = "정답이야! 🎉 레벨업 꾹꾹이~";
    xp += 50;
    if (xp >= 100) {
      level += 1;
      xp = 0;
      document.getElementById("level").innerText = level;
    }
    document.getElementById("xp").innerText = xp;
  } else {
    feedback.innerText = "아쉽지만 틀렸어! 다시 도전해보자! 🐾";
  }
}

function showHint() {
  const hint = correctAnswer.slice(0, ++hintIndex);
  document.getElementById("feedback").innerText = "힌트: " + hint;
}
