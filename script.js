let colors = ["red", "green", "blue"];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function predict(choice) {
  let actual = getRandomColor();
  let box = document.getElementById("colorBox");
  let result = document.getElementById("result");

  box.style.background = actual;

  if (choice === actual) {
    result.innerHTML = "✅ You Won! (" + actual + ")";
    result.style.color = "green";
  } else {
    result.innerHTML = "❌ You Lost! It was " + actual;
    result.style.color = "red";
  }
}