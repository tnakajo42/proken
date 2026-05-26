let currentLevel = null;
let currentQuestion = 0;
let questions = [];
let answers = [];
let timeLeft = 0;
let timerInterval = null;
let isReviewMode = false;

const $ = (id) => document.getElementById(id);

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $(screenId).classList.add("active");
}

function buildLevelGrid() {
  const grid = $("level-grid");
  grid.innerHTML = "";
  for (let lv = 1; lv <= 6; lv++) {
    const data = levelData[lv];
    const card = document.createElement("div");
    card.className = "level-card";
    card.style.borderTopColor = data.color;

    const badge = document.createElement("div");
    badge.className = "level-num";
    badge.style.background = data.color;
    badge.textContent = lv;

    const title = document.createElement("div");
    title.className = "level-title";
    title.textContent = data.name;

    const topics = document.createElement("div");
    topics.className = "level-topics";
    topics.textContent = data.topics.join("、");

    const info = document.createElement("div");
    info.className = "level-info";
    info.textContent = data.questions.length + "問 / " + data.time + "分";

    const btn = document.createElement("button");
    btn.className = "level-start-btn";
    btn.style.background = data.color;
    btn.textContent = "スタート";
    btn.addEventListener("click", () => startQuiz(lv));

    card.appendChild(badge);
    card.appendChild(title);
    card.appendChild(topics);
    card.appendChild(info);
    card.appendChild(btn);
    grid.appendChild(card);
  }
}

function startQuiz(level) {
  currentLevel = level;
  const data = levelData[level];
  questions = data.questions;
  currentQuestion = 0;
  answers = new Array(questions.length).fill(null);
  timeLeft = data.time * 60;
  isReviewMode = false;

  $("total-num").textContent = questions.length;
  $("level-badge-header").textContent = data.name;
  $("level-badge-header").style.background = data.color;
  $("level-badge-header").style.padding = "2px 12px";
  $("level-badge-header").style.borderRadius = "12px";
  $("level-badge-header").style.fontSize = "12px";
  $("level-badge-header").style.fontWeight = "600";

  showScreen("quiz-screen");
  showQuestion(0);
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const min = Math.floor(timeLeft / 60);
  const sec = timeLeft % 60;
  $("timer-display").textContent = min + "分 " + String(sec).padStart(2, "0") + "秒";
  if (timeLeft <= 60) {
    $("timer-display").style.color = "#fca5a5";
  } else if (timeLeft <= 300) {
    $("timer-display").style.color = "#fcd34d";
  } else {
    $("timer-display").style.color = "";
  }
}

function showQuestion(index) {
  currentQuestion = index;
  const q = questions[index];

  $("current-num").textContent = index + 1;
  $("question-label").textContent = "問題" + (index + 1);
  $("question-text").textContent = q.question;

  const codeEl = $("question-code");
  if (q.code) {
    codeEl.textContent = q.code;
    codeEl.classList.add("visible");
  } else {
    codeEl.textContent = "";
    codeEl.classList.remove("visible");
  }

  $("prev-btn").disabled = index === 0;

  const nextBtn = $("next-btn");
  if (isReviewMode) {
    nextBtn.textContent = index === questions.length - 1 ? "結果に戻る" : "つぎへ";
    nextBtn.classList.remove("submit-btn");
  } else if (index === questions.length - 1) {
    nextBtn.textContent = "採点する";
    nextBtn.classList.add("submit-btn");
  } else {
    nextBtn.textContent = "つぎへ";
    nextBtn.classList.remove("submit-btn");
  }

  const answeredCount = answers.filter((a) => a !== null).length;
  $("progress-fill").style.width = (answeredCount / questions.length) * 100 + "%";

  renderOptions(q, index);
}

function renderOptions(q, qIndex) {
  const panel = $("options-panel");
  panel.innerHTML = "";

  q.options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option";

    if (isReviewMode) {
      if (i === q.answer) div.classList.add("correct-answer");
      if (answers[qIndex] === i && i !== q.answer) div.classList.add("wrong-answer");
    } else {
      if (answers[qIndex] === i) div.classList.add("selected");
      div.addEventListener("click", () => selectAnswer(qIndex, i));
    }

    const numDiv = document.createElement("div");
    numDiv.className = "option-number";
    numDiv.textContent = i + 1;

    const contentDiv = document.createElement("div");
    contentDiv.className = "option-content";

    if (typeof opt === "object" && opt.code !== undefined) {
      const pre = document.createElement("pre");
      pre.className = "option-code";
      pre.textContent = opt.code;
      contentDiv.appendChild(pre);
    } else {
      const text = typeof opt === "string" ? opt : opt.text;
      const textDiv = document.createElement("div");
      textDiv.className = "option-text";
      textDiv.textContent = text;
      contentDiv.appendChild(textDiv);
    }

    div.appendChild(numDiv);
    div.appendChild(contentDiv);
    panel.appendChild(div);
  });

  if (isReviewMode && q.explanation) {
    const expDiv = document.createElement("div");
    expDiv.className = "explanation";
    expDiv.textContent = q.explanation;
    panel.appendChild(expDiv);
  }
}

function selectAnswer(qIndex, optIndex) {
  answers[qIndex] = optIndex;
  showQuestion(currentQuestion);
}

function prevQuestion() {
  if (currentQuestion > 0) {
    showQuestion(currentQuestion - 1);
  }
}

function nextQuestion() {
  if (isReviewMode) {
    if (currentQuestion < questions.length - 1) {
      showQuestion(currentQuestion + 1);
    } else {
      showResults();
    }
    return;
  }

  if (currentQuestion < questions.length - 1) {
    showQuestion(currentQuestion + 1);
  } else {
    const unanswered = answers.filter((a) => a === null).length;
    let msg = "採点しますか？";
    if (unanswered > 0) {
      msg = "未回答が " + unanswered + " 問あります。採点しますか？";
    }
    if (confirm(msg)) {
      finishQuiz();
    }
  }
}

function finishQuiz() {
  clearInterval(timerInterval);
  showResults();
}

function showResults() {
  showScreen("results-screen");

  let correct = 0;
  questions.forEach((q, i) => {
    if (answers[i] === q.answer) correct++;
  });

  $("score-value").textContent = correct;
  $("score-total-num").textContent = questions.length;

  const circle = $("score-circle");
  circle.classList.remove("excellent", "fail");
  const pct = Math.round((correct / questions.length) * 100);
  if (pct >= 70) {
    circle.classList.add("excellent");
  } else {
    circle.classList.add("fail");
  }

  const msgEl = $("score-message");
  if (correct === questions.length) {
    msgEl.textContent = "満点！素晴らしい！";
    msgEl.className = "score-message pass";
  } else if (pct >= 70) {
    msgEl.textContent = pct + "点！合格ラインです！";
    msgEl.className = "score-message pass";
  } else {
    msgEl.textContent = pct + "点。もう少し頑張りましょう！";
    msgEl.className = "score-message fail";
  }

  const grid = $("results-grid");
  grid.innerHTML = "";
  questions.forEach((q, i) => {
    const dot = document.createElement("div");
    dot.className = "result-dot";
    dot.textContent = i + 1;
    if (answers[i] === null) {
      dot.classList.add("unanswered");
    } else if (answers[i] === q.answer) {
      dot.classList.add("correct");
    } else {
      dot.classList.add("incorrect");
    }
    grid.appendChild(dot);
  });
}

function startReview() {
  isReviewMode = true;
  showScreen("quiz-screen");
  clearInterval(timerInterval);
  $("timer-display").textContent = "解答確認中";
  $("timer-display").style.color = "";
  showQuestion(0);
}

function retryQuiz() {
  startQuiz(currentLevel);
}

function backToLevels() {
  clearInterval(timerInterval);
  showScreen("start-screen");
}

$("prev-btn").addEventListener("click", prevQuestion);
$("next-btn").addEventListener("click", nextQuestion);
$("retry-btn").addEventListener("click", retryQuiz);
$("review-btn").addEventListener("click", startReview);
$("back-btn").addEventListener("click", backToLevels);

document.addEventListener("keydown", (e) => {
  if (!$("quiz-screen").classList.contains("active")) return;
  if (e.key === "ArrowLeft") prevQuestion();
  if (e.key === "ArrowRight") nextQuestion();
  if (e.key >= "1" && e.key <= "4" && !isReviewMode) {
    selectAnswer(currentQuestion, parseInt(e.key) - 1);
  }
});

buildLevelGrid();
