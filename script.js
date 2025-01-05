let expression = ""; // Stores the current expression

function appendValue(value) {
  const result = document.getElementById("result");
  expression += value;
  result.value = expression;
}

function clearScreen() {
  expression = "";
  document.getElementById("result").value = "";
  document.getElementById("steps").innerHTML = ""; // Clear steps
}

function deleteLast() {
  expression = expression.slice(0, -1);
  document.getElementById("result").value = expression;
}

function calculateResult() {
  const steps = document.getElementById("steps");
  try {
    const finalResult = evalExpression(expression); // Evaluate expression step-by-step
    steps.innerHTML = generateSteps(expression); // Display step-by-step breakdown
    document.getElementById("result").value = finalResult;
    expression = finalResult.toString(); // Update expression to the result
  } catch (e) {
    document.getElementById("result").value = "Error";
    steps.innerHTML = "Invalid expression!";
  }
}

function evalExpression(expr) {
  return Function(`return (${expr});`)(); // Safely evaluate the expression
}

function generateSteps(expr) {
  let currentExpr = expr;
  const steps = [];

  // Handle parentheses
  while (currentExpr.includes("(")) {
    const innerMost = currentExpr.match(/\([^()]*\)/);
    if (innerMost) {
      const evalInner = evalExpression(innerMost[0]);
      steps.push(`Evaluate ${innerMost[0]} = ${evalInner}`);
      currentExpr = currentExpr.replace(innerMost[0], evalInner);
    }
  }

  // Break down remaining operations
  const operators = /([-+]?[0-9.]+)([*/+-])([-+]?[0-9.]+)/;
  while (operators.test(currentExpr)) {
    const match = currentExpr.match(operators);
    const evalPart = evalExpression(match[0]);
    steps.push(`Evaluate ${match[0]} = ${evalPart}`);
    currentExpr = currentExpr.replace(match[0], evalPart);
  }

  steps.push(`Final result: ${currentExpr}`);
  return steps.join("<br>");
}

function calculateSquareRoot() {
  const result = document.getElementById("result");
  try {
    const value = parseFloat(expression || "0");
    if (value < 0) {
      result.value = "Error";
    } else {
      const sqrtValue = Math.sqrt(value).toFixed(6);
      expression = sqrtValue;
      result.value = sqrtValue;
    }
  } catch {
    result.value = "Error";
  }
}

function calculateSin() {
  const result = document.getElementById("result");
  try {
    const value = parseFloat(expression || "0");
    const sinValue = Math.sin(toRadians(value)).toFixed(6);
    expression = sinValue;
    result.value = sinValue;
  } catch {
    result.value = "Error";
  }
}

function calculateCos() {
  const result = document.getElementById("result");
  try {
    const value = parseFloat(expression || "0");
    const cosValue = Math.cos(toRadians(value)).toFixed(6);
    expression = cosValue;
    result.value = cosValue;
  } catch {
    result.value = "Error";
  }
}

function calculateTan() {
  const result = document.getElementById("result");
  try {
    const value = parseFloat(expression || "0");
    const tanValue = Math.tan(toRadians(value)).toFixed(6);
    expression = tanValue;
    result.value = tanValue;
  } catch {
    result.value = "Error";
  }
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
