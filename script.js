function appendValue(value) {
  const result = document.getElementById("result");
  result.value += value;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function deleteLast() {
  const result = document.getElementById("result");
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  const result = document.getElementById("result");
  try {
    result.value = eval(result.value); // Basic arithmetic evaluation
  } catch (error) {
    result.value = "Error";
  }
}

function calculateSquareRoot() {
  const result = document.getElementById("result");
  try {
    result.value = Math.sqrt(eval(result.value));
  } catch (error) {
    result.value = "Error";
  }
}

function calculatePower() {
  const result = document.getElementById("result");
  try {
    result.value = Math.pow(eval(result.value), 2);
  } catch (error) {
    result.value = "Error";
  }
}

function calculateSin() {
  const result = document.getElementById("result");
  try {
    result.value = Math.sin(toRadians(eval(result.value))).toFixed(6);
  } catch (error) {
    result.value = "Error";
  }
}

function calculateCos() {
  const result = document.getElementById("result");
  try {
    result.value = Math.cos(toRadians(eval(result.value))).toFixed(6);
  } catch (error) {
    result.value = "Error";
  }
}

function calculateTan() {
  const result = document.getElementById("result");
  try {
    result.value = Math.tan(toRadians(eval(result.value))).toFixed(6);
  } catch (error) {
    result.value = "Error";
  }
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
