const dialog = document.querySelector("#select-dialog");
const round = document.getElementById("round");
const robotGesture = document.querySelector("#robot .gesture");
const myselfGesture = document.querySelector("#myself .gesture");
const robotPrepare = document.querySelector("#robot .prepare");
const myselfPrepare = document.querySelector("#myself .prepare");
const robotScoreDom = document.querySelector("#robot .score");
const myselfScoreDom = document.querySelector("#myself .score");

const selectForm = document.getElementById("select-form");
const selectElement = document.getElementById("select-gesture");
const result = document.getElementById("result");
const start = document.getElementById("start");
const finalResult = document.getElementById("final");

const images = ["rock", "scissor", "paper"];
let roundCount = 0;
let robotScore = {
    win: 0,
    lose: 0,
  },
  myselfScore = {
    win: 0,
    lose: 0,
  };
let winner = "";

//点击"开始下一回合"按钮
function startGame() {
  dialog.showModal(); // 显示对话框
}

selectForm.addEventListener("submit", function (e) {
  e.preventDefault(); //清除表单默认提交行为
  let selectedValue = selectElement.value; // 获取用户选择的值
  dialog.close(); //隐藏对话框
  let robot = robotRun();
  let myself = myselfRun(selectedValue);
  judge(robot, myself); //判断游戏胜负
  roundCount = roundInfo();
  finishGame(roundCount);
  return false;
});

//机器人随机手势
function robotRun() {
  let random = Math.floor(Math.random() * 3);
  robotPrepare.style.display = "none";
  robotGesture.innerHTML = ` <img src="./images/${images[random]}.png" alt="">`;
  return images[random];
}

//自己选择手势
function myselfRun(selectedValue) {
  myselfPrepare.style.display = "none";
  myselfGesture.innerHTML = ` <img src="./images/${selectedValue}.png" alt="">`;
  return selectedValue;
}

//判断游戏胜负
function judge(robot, myself) {
  if (robot === myself) {
    result.innerHTML = "本回合平";
  } else if (
    (robot === "rock" && myself === "scissor") ||
    (robot === "scissor" && myself === "paper") ||
    (robot === "paper" && myself === "rock")
  ) {
    result.innerHTML = "本回合机器人赢";
    robotScore.win++;
    myselfScore.lose++;
  } else {
    result.innerHTML = "本回合你赢";
    myselfScore.win++;
    robotScore.lose++;
  }
  robotScoreDom.innerHTML = `胜：${robotScore.win} | 负：${robotScore.lose}`;
  myselfScoreDom.innerHTML = `胜：${myselfScore.win} | 负：${myselfScore.lose}`;
}

//回合信息展示
function roundInfo() {
  roundCount++;
  round.innerHTML = `第${roundCount}回合（共3回合）`;
  return roundCount;
}

//赢家信息展示
function finishGame(roundCount) {
  if (roundCount === 3|| robotScore.win === 2 || myselfScore.win === 2) {
    start.style.display = "none";
    if (robotScore.win === myselfScore.win)
      finalResult.innerHTML = `不错嘛，平局了`;
    else {
      if (robotScore.win > myselfScore.win) winner = "机器人";
      else if (robotScore.win < myselfScore.win) winner = "你";
      finalResult.innerHTML = `(≧v≦)o~~好棒，恭喜${winner}获得胜利！`;
    }
  }
}
