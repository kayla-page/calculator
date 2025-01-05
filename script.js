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
    // Safely evaluate the expression
    result.value = eval(result.value || "0");
  } catch (error) {
    result.value = "Error";
  }
}

function calculateSquareRoot() {
  const result = document.getElementById("result");
  try {
    const value = parseFloat(result.value || "0");
    if (value < 0) {
      result.value = "Error";
    } else {
      result.value = Math.sqrt(value).toFixed(6);
    }
  } catch (error) {
    result.value = "Error";
  }
}

function calculatePower() {
  const result = document.getElementById("result");
  try {
    const value = parseFloat(result.value || "0");
    result.value = Math.pow(value, 2).toFixed(6);
  } catch (error) {
    result.value = "Error";
  }
}

function calculateSin() {
  const result = document.getElementById("result");
  try {
    const value = parseFloat(result.value || "0");
    result.value = Math.sin(toRadians(value)).toFixed(6);
  } catch (error) {
    result.value = "Error";
  }
}

function calculateCos() {
  const result = document.getElementById("result");
  try {
    const value = parseFloat(result.value || "0");
    result.value = Math.cos(toRadians(value)).toFixed(6);
  } catch (error) {
    result.value = "Error";
  }
}

function calculateTan() {
  const result = document.getElementById("result");
  try {
    const value = parseFloat(result.value || "0");
    result.value = Math.tan(toRadians(value)).toFixed(6);
  } catch (error) {
    result.value = "Error";
  }
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

