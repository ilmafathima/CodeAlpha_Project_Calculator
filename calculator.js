function appendNumber(number) {
  const result = document.getElementById("result");
  result.value += number;
}

function appendSymbol(symbol) {
  const result = document.getElementById("result");
  result.value += symbol;
}

function clearDisplay() {
  const result = document.getElementById("result");
  result.value = "";
}

function clearEntry() {
  const result = document.getElementById("result");
  result.value = result.value.slice(0, -1);
}

function calculate() {
  const result = document.getElementById("result");
  try {
    result.value = eval(result.value) || 0; 
  } catch {
    result.value = "Error";
  }
}
