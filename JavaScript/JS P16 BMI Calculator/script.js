function calculate() {
  const weight = document.getElementById("weight").value;
  document.getElementById("weight-val").textContent = `${weight} kg`;

  const height = document.getElementById("height").value;
  document.getElementById("height-val").textContent = `${height} cm`;

  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  const result = document.querySelector(".result");
  result.textContent = bmi;

  if (bmi < 18.5) {
    category = "體重過輕";
    result.style.color = "#ffc44d";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "體重正常";
    result.style.color = "#0be881";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "體重過重";
    result.style.color = "#ff884d";
  } else {
    category = "肥宅";
    result.style.color = "#ff5e57";
  }
  document.querySelector(".category").textContent = category;
}
