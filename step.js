function appendValue(value) {
  const result = document.getElementById("result");
  result.value += value;
}

function clearScreen() {
  document.getElementById("result").value = "";
  document.getElementById("steps").innerHTML = ""; // Clear the step-by-step section
}

function deleteLast() {
  const result = document.getElementById("result");
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  const result = document.getElementById("result");
  const steps = document.getElementById("steps");
  try {
    const expression = result.value;
    const evaluatedSteps = getStepByStep(expression);
    steps.innerHTML = evaluatedSteps; // Display the steps
    result.value = eval(expression); // Calculate the final result
  } catch (error) {
    result.value = "Error";
    steps.innerHTML = "Invalid expression!";
  }
}

function getStepByStep(expression) {
  // Parse the expression and break it down
  const steps = [];
  let currentExpression = expression;

  // Handle parentheses
  while (currentExpression.includes("(")) {
    const innerMost = currentExpression.match(/\([^()]*\)/);
    if (innerMost) {
      const evalInner = eval(innerMost[0]);
      steps.push(`Evaluate ${innerMost[0]} = ${evalInner}`);
      currentExpression = currentExpression.replace(innerMost[0], evalInner);
    }
  }

  // Handle multiplication/division
  const multiplicationDivision = /(-?\d+(\.\d+)?)([*/])(-?\d+(\.\d+)?)/;
  while (multiplicationDivision.test(currentExpression)) {
    const match = currentExpression.match(multiplicationDivision);
    const evalPart = eval(match[0]);
    steps.push(`Evaluate ${match[0]} = ${evalPart}`);
    currentExpression = currentExpression.replace(match[0], evalPart);
  }

  // Handle addition/subtraction
  const additionSubtraction = /(-?\d+(\.\d+)?)([+-])(-?\d+(\.\d+)?)/;
  while (additionSubtraction.test(currentExpression)) {
    const match = currentExpression.match(additionSubtraction);
    const evalPart = eval(match[0]);
    steps.push(`Evaluate ${match[0]} = ${evalPart}`);
    currentExpression = currentExpression.replace(match[0], evalPart);
  }

  steps.push(`Final result: ${currentExpression}`);
  return steps.join("<br>");
}
