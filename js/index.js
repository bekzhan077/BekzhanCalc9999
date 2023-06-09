const calcSum = document.getElementById.bind(document);

let memory;

const operators = ["+", "-", "*", "/"];

function Equal() {
  calc();
  calcSum("res").value = memory;
  calcSum("result").innerText = memory;
  calcSum("value").innerText = memory;
}

function backspace() {
  let save = calcSum("res").value;
  let value = calcSum("value").innerText;

  if (save.length > 1) {
    let sub = value.slice(0, save.length - 1);
    calcSum("value").innerText = sub;
    calcSum("res").value = sub;
    calc();
  } else if (save.length === 1) {
    reset();
  } else {
    reset();
  }
}

function btnKey(num) {
  let save = calcSum("res").value;

  if (save === "ERROR!") return reset();

  if (
    operators.includes(save[save.length - 1]) &&
    operators.includes(num) &&
    save.length !== "-"
  ) {
    calcSum("value").innerText = save.slice(0, save.length - 1) + num;
    return (calcSum("res").value = save.slice(0, save.length - 1) + num);
  }

  calcSum("res").value = save + num;
  calcSum("value").innerText = save + num;

  calc();
}

function calc() {
  let result = calcSum("res").value;

  if (result === "ERROR!" || (operators.includes(result) && result !== "-")) {
    return reset();
  }

  let resDisplay;

  if (operators.includes(result.slice(-1)) && result !== "-") {
    let valueNormalize = result.slice(0, result.length - 1);
    resDisplay = eval(valueNormalize);
  } else {
    resDisplay = eval(result);
  }

  if (
    resDisplay === undefined ||
    resDisplay === Infinity ||
    Number.isNaN(resDisplay) ||
    resDisplay === -Infinity
  ) {
    calcSum("result").innerText = "ERROR!";
  } else {
    calcSum("result").innerText = resDisplay;
    memory = resDisplay;
  }
}

function reset() {
  calcSum("res").value = "";
  calcSum("result").innerText = "";
  calcSum("value").innerText = "";
}

