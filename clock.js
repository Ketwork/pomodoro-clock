let breakIncrementButton = document.getElementById("break-increment");
let breakDecrementButton = document.getElementById("break-decrement");
let sessionIncrementButton = document.getElementById("session-increment");
let sessionDecrementButton = document.getElementById("session-decrement");
let startStopButton = document.getElementById("start_stop");
let resetButton = document.getElementById("reset");

let breakLength = document.getElementById("break-length");
let sessionLength = document.getElementById("session-length");
let timeLeft = document.getElementById("time-left");

let timer = 0;
let timerStatus = "begin";

// Session Length +
sessionIncrementButton.addEventListener("click", function () {
  if (timerStatus === "begin" || timerStatus === "stopped") {
    sessionLength.innerText = parseInt(sessionLength.innerText) + 1;
    time(sessionLength);
  }
});

// Session Length -
sessionDecrementButton.addEventListener("click", function () {
  if (timerStatus === "begin" || timerStatus === "stopped") {
    if (sessionLength.innerText > 0) {
      sessionLength.innerText = parseInt(sessionLength.innerText) - 1;
      time(sessionLength);
    }
  }
});

// Break Length +
breakIncrementButton.addEventListener("click", function () {
  breakLength.innerText = parseInt(breakLength.innerText) + 1;
});

// Break Length -
breakDecrementButton.addEventListener("click", function () {
  if (breakLength.innerText > 0) {
    breakLength.innerText = parseInt(breakLength.innerText) - 1;
  }
});

// Start/Stop Button
startStopButton.addEventListener("click", function () {
  if (timerStatus === "begin" || timerStatus === "stopped") {
    console.log("timer started");

    timer = setInterval(() => {
      timeLeft.innerText = decrementTime(timeLeft.innerText);
    }, 1000);
    timerStatus = "counting";
  } else if (timerStatus === "counting") {
    console.log("timer stopped");
    timerStatus = "stopped";
    clearInterval(timer);
  }
});

// Reset Button
resetButton.addEventListener("click", function () {
  console.log("interval cleared");
  clearInterval(timer);
  timeLeft.innerText = "25:00";
  timerStatus = "stopped";
});

// Countdown function
function decrementTime(timeString) {
  let timeDisplay = timeString.split(":");
  let minuteDisplay = parseInt(timeDisplay[0]);
  let secondDisplay = parseInt(timeDisplay[1]);

  secondDisplay -= 1;

  if (secondDisplay === -1) {
    secondDisplay = 59;
    minuteDisplay -= 1;
  }

  if (secondDisplay <= 9) {
    secondDisplay = "0" + secondDisplay;
  }

  console.log(secondDisplay);

  return minuteDisplay + ":" + secondDisplay;
}

function time(sessionLength) {
  let clockCount = Math.floor(parseInt(sessionLength.innerText) * 60);
  let minutes = clockCount / 60;
  timeLeft.innerText = minutes + ":" + "00";
  console.log(minutes);
}

time(sessionLength);
