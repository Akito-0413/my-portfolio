const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const feedback = document.getElementById("feedback");

// 正解を判定する
const choose = function (choiceString) {
  if (choiceString === "MAN WITH A MISSION") {
    feedback.textContent = "残念！1番ではないなあ泣！";
  } else if (choiceString === "BUMP OF CHIKEN") {
    feedback.textContent = "正解！全ての曲が好きだよね！名曲しかねえ!";
  } else if (choiceString === "SHISHAMO") {
    feedback.textContent = "残念！1番ではないなあ泣！";
  }
};

choice1.onclick = function () {
  choose("MAN WITH A MISSION");
};
choice2.onclick = function () {
  choose("BUMP OF CHIKEN");
};
choice3.onclick = function () {
  choose("SHISHAMO");
};
