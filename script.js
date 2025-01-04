function appendValue(value) {
  const result = document.getElementById("result");
  result.value += value;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function calculateResult() {
  const result = document.getElementById("result");
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}
