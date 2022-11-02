const outputColor = document.querySelector("#output-color span");
const output = document.getElementById("output");
const genBtn = document.getElementById("gen-btn");
const copyBtn = document.getElementById("copy-btn");
const customAlert = document.querySelector(".custom-alert");
let hexString = "0123456789abcdef";

//產生隨機Hex色號
const genHexCode = () => {
  let hexCode = "#";
  for (i = 0; i < 6; i++) {
    hexCode += hexString[Math.floor(Math.random() * hexString.length)];
  }
  output.value = hexCode;
  outputColor.classList.remove("show-color");
  setTimeout(() => {
    outputColor.classList.add("show-color");
  }, 10);
  outputColor.style.backgroundColor = hexCode;
};

//複製色號
copyBtn.addEventListener("click", () => {
  const result = output.value;
  navigator.clipboard.writeText(result);
  customAlert.style.transform = "translateX(0)";
  setTimeout(() => {
    customAlert.style.transform = "translateX( calc(100% + 10px))";
  }, 2000);
});

window.onload = genHexCode;
genBtn.addEventListener("click", genHexCode);
