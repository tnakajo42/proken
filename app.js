const EXAM_TIME = 40 * 60;

const questions = [
  {
    question: "「おはようございます」と出力されるプログラムを選択しなさい",
    options: [
      { code: 'let text1 = "おはよう";\nlet text2 = "ございます";\n\nconsole.log(text1 + text2);' },
      { code: 'let text1 = "おはよう";\nlet text2 = "ございます";\n\nconsole.log(text1 - text2);' },
      { code: 'let text1 = "おはよう";\nlet text2 = "ございます";\n\nconsole.log("text1" + "text2");' },
      { code: 'let text1 = "おはよう";\nlet text2 = "ございます";\n\nconsole.log(text2 + text1);' }
    ],
    answer: 0,
    explanation: "文字列の連結には + 演算子を使います。text1 + text2 で「おはよう」+「ございます」=「おはようございます」になります。"
  },
  {
    question: "次のプログラムの実行結果を選びなさい",
    code: 'let x = 10;\nlet y = 3;\n\nconsole.log(x + y);',
    options: [
      { text: "13" },
      { text: "103" },
      { text: "10 + 3" },
      { text: "x + y" }
    ],
    answer: 0,
    explanation: "x と y はどちらも数値なので、+ 演算子は加算として動作します。10 + 3 = 13 です。"
  },
  {
    question: "次のプログラムの実行結果を選びなさい",
    code: 'let x = "10";\nlet y = 3;\n\nconsole.log(x + y);',
    options: [
      { text: "13" },
      { text: "103" },
      { text: "エラーになる" },
      { text: "NaN" }
    ],
    answer: 1,
    explanation: 'x は文字列の "10" なので、+ 演算子は文字列の連結として動作します。"10" + 3 → "103" になります。'
  },
  {
    question: "次のプログラムの実行結果を選びなさい",
    code: "let x = 5;\nx = x + 3;\n\nconsole.log(x);",
    options: [
      { text: "5" },
      { text: "3" },
      { text: "8" },
      { text: "53" }
    ],
    answer: 2,
    explanation: "x に 5 を代入した後、x + 3（= 8）を再び x に代入しています。最終的に x は 8 です。"
  },
  {
    question: "「こんにちは太郎さん」と出力されるプログラムを選択しなさい",
    options: [
      { code: 'let name = "太郎";\n\nconsole.log("こんにちは" + name + "さん");' },
      { code: 'let name = "太郎";\n\nconsole.log("こんにちは" + "name" + "さん");' },
      { code: 'let name = "太郎";\n\nconsole.log(こんにちは + name + さん);' },
      { code: 'let name = "太郎";\n\nconsole.log("こんにちはnameさん");' }
    ],
    answer: 0,
    explanation: '変数 name の値を使うには、クォーテーションで囲まずに変数名をそのまま書きます。"name" と書くと文字列の "name" になってしまいます。'
  },
  {
    question: "次のプログラムの実行結果を選びなさい",
    code: 'console.log("Hello");\nconsole.log("World");',
    options: [
      { text: "HelloWorld" },
      { text: "Hello World" },
      { text: "Hello\nWorld" },
      { text: "World\nHello" }
    ],
    answer: 2,
    explanation: "console.log() は出力の後に自動で改行します。そのため Hello と World は別々の行に表示されます。"
  },
  {
    question: "次のプログラムの実行結果を選びなさい",
    code: "let x = 10;\nlet y = 3;\n\nconsole.log(x * y);",
    options: [
      { text: "30" },
      { text: "13" },
      { text: "7" },
      { text: "103" }
    ],
    answer: 0,
    explanation: "* 演算子は掛け算（乗算）です。10 * 3 = 30 になります。"
  },
  {
    question: "次のプログラムの実行結果を選びなさい",
    code: "let x = 10;\nlet y = 4;\n\nconsole.log(x % y);",
    options: [
      { text: "2.5" },
      { text: "2" },
      { text: "6" },
      { text: "0" }
    ],
    answer: 1,
    explanation: "% は剰余（余り）演算子です。10 ÷ 4 = 2 あまり 2 なので、結果は 2 です。"
  },
  {
    question: "次のプログラムの実行結果を選びなさい",
    code: 'let x = "Hello";\nx = "World";\n\nconsole.log(x);',
    options: [
      { text: "Hello" },
      { text: "World" },
      { text: "HelloWorld" },
      { text: "エラーになる" }
    ],
    answer: 1,
    explanation: "let で宣言した変数は再代入できます。x に \"World\" を再代入したので、最終的な x の値は \"World\" です。"
  },
  {
    question: "次のプログラムの実行結果を選びなさい",
    code: 'let x = 10;\n\nif (x > 5) {\n  console.log("大きい");\n}',
    options: [
      { text: "大きい" },
      { text: "何も出力されない" },
      { text: "x > 5" },
      { text: "true" }
    ],
    answer: 0,
    explanation: "x は 10 で、10 > 5 は true です。条件が true なので if ブロック内の処理が実行されます。"
  },
  {
    question: "次のプログラムの実行結果を選びなさい",
    code: 'let x = 3;\n\nif (x > 5) {\n  console.log("大きい");\n} else {\n  console.log("小さい");\n}',
    options: [
      { text: "大きい" },
      { text: "小さい" },
      { text: "大きい\n小さい" },
      { text: "何も出力されない" }
    ],
    answer: 1,
    explanation: "x は 3 で、3 > 5 は false です。条件が false なので else ブロック内の処理が実行されます。"
  },
  {
    question: "次のプログラムの実行結果を選びなさい",
    code: 'let score = 75;\n\nif (score >= 80) {\n  console.log("A");\n} else if (score >= 60) {\n  console.log("B");\n} else {\n  console.log("C");\n}',
    options: [
      { text: "A" },
      { text: "B" },
      { text: "C" },
      { text: "A\nB" }
    ],
    answer: 1,
    explanation: "score は 75 です。75 >= 80 は false、次の 75 >= 60 は true なので \"B\" が出力されます。"
  },
  {
    question: "次のプログラムの実行結果を選びなさい",
    code: "for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}",
    options: [
      { text: "0\n1\n2" },
      { text: "1\n2\n3" },
      { text: "1\n2\n3\n4" },
      { text: "3" }
    ],
    answer: 1,
    explanation: "i は 1 から始まり、i <= 3 の間ループします。i が 1, 2, 3 のとき実行され、4 になるとループ終了です。"
  },
  {
    question: "次のプログラムの実行結果を選びなさい",
    code: "let sum = 0;\n\nfor (let i = 1; i <= 5; i++) {\n  sum = sum + i;\n}\n\nconsole.log(sum);",
    options: [
      { text: "5" },
      { text: "10" },
      { text: "15" },
      { text: "0" }
    ],
    answer: 2,
    explanation: "sum に 1 + 2 + 3 + 4 + 5 を順番に加算していきます。0+1+2+3+4+5 = 15 です。"
  },
  {
    question: "3, 2, 1 の順に出力されるプログラムを選択しなさい",
    options: [
      { code: "for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}" },
      { code: "for (let i = 3; i >= 1; i--) {\n  console.log(i);\n}" },
      { code: "for (let i = 3; i > 1; i--) {\n  console.log(i);\n}" },
      { code: "for (let i = 1; i >= 3; i--) {\n  console.log(i);\n}" }
    ],
    answer: 1,
    explanation: "i を 3 から始めて i >= 1 の間 i-- で 1 ずつ減らすと、3, 2, 1 の順に出力されます。"
  },
  {
    question: "次のプログラムの実行結果を選びなさい",
    code: 'let fruits = ["りんご", "みかん", "ぶどう"];\n\nconsole.log(fruits[0]);',
    options: [
      { text: "りんご" },
      { text: "みかん" },
      { text: "ぶどう" },
      { text: "エラーになる" }
    ],
    answer: 0,
    explanation: "配列のインデックスは 0 から始まります。fruits[0] は最初の要素「りんご」です。"
  },
  {
    question: "次のプログラムの実行結果を選びなさい",
    code: 'let fruits = ["りんご", "みかん", "ぶどう"];\n\nconsole.log(fruits.length);',
    options: [
      { text: "2" },
      { text: "3" },
      { text: "4" },
      { text: "ぶどう" }
    ],
    answer: 1,
    explanation: ".length は配列の要素数を返します。fruits には 3 つの要素があるので 3 が出力されます。"
  },
  {
    question: "次のプログラムの実行結果を選びなさい",
    code: "function add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(3, 4));",
    options: [
      { text: "34" },
      { text: "7" },
      { text: "add(3, 4)" },
      { text: "エラーになる" }
    ],
    answer: 1,
    explanation: "関数 add は引数 a と b を受け取り、a + b を返します。add(3, 4) は 3 + 4 = 7 です。"
  },
  {
    question: "次のプログラムの実行結果を選びなさい",
    code: "let i = 1;\n\nwhile (i <= 3) {\n  console.log(i);\n  i++;\n}",
    options: [
      { text: "1\n2\n3" },
      { text: "1\n2\n3\n4" },
      { text: "0\n1\n2\n3" },
      { text: "何も出力されない" }
    ],
    answer: 0,
    explanation: "i は 1 から始まり、i <= 3 の間ループします。各ループで i を出力した後 i++ で 1 増やします。"
  },
  {
    question: "次のプログラムの実行結果を選びなさい",
    code: "let a = 5;\nlet b = a;\na = 10;\n\nconsole.log(b);",
    options: [
      { text: "10" },
      { text: "5" },
      { text: "a" },
      { text: "エラーになる" }
    ],
    answer: 1,
    explanation: "b = a の時点で a の値（5）が b にコピーされます。その後 a を 10 に変更しても b は 5 のままです。"
  }
];

let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);
let timeLeft = EXAM_TIME;
let timerInterval = null;
let isReviewMode = false;

const $ = (id) => document.getElementById(id);

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $(screenId).classList.add("active");
}

function startQuiz() {
  currentQuestion = 0;
  answers = new Array(questions.length).fill(null);
  timeLeft = EXAM_TIME;
  isReviewMode = false;
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

    if (opt.code !== undefined) {
      const pre = document.createElement("pre");
      pre.className = "option-code";
      pre.textContent = opt.code;
      contentDiv.appendChild(pre);
    } else {
      const textDiv = document.createElement("div");
      textDiv.className = "option-text";
      textDiv.textContent = opt.text;
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

  const circle = $("score-circle");
  circle.classList.remove("excellent", "fail");
  if (correct >= 14) {
    circle.classList.add("excellent");
  } else {
    circle.classList.add("fail");
  }

  const msgEl = $("score-message");
  const pct = Math.round((correct / questions.length) * 100);
  if (correct === questions.length) {
    msgEl.textContent = "満点！素晴らしい！";
    msgEl.className = "score-message pass";
  } else if (correct >= 14) {
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
  startQuiz();
}

$("start-btn").addEventListener("click", startQuiz);
$("prev-btn").addEventListener("click", prevQuestion);
$("next-btn").addEventListener("click", nextQuestion);
$("retry-btn").addEventListener("click", retryQuiz);
$("review-btn").addEventListener("click", startReview);

document.addEventListener("keydown", (e) => {
  if (!$("quiz-screen").classList.contains("active")) return;
  if (e.key === "ArrowLeft") prevQuestion();
  if (e.key === "ArrowRight") nextQuestion();
  if (e.key >= "1" && e.key <= "4" && !isReviewMode) {
    selectAnswer(currentQuestion, parseInt(e.key) - 1);
  }
});
