const selected = document.querySelector(".selected");
const options = document.querySelector(".options");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  options.classList.toggle("active");
});

optionsList.forEach((option) => {
  option.addEventListener("click", () => {
    selected.innerHTML = option.querySelector("span").innerText;
    options.classList.remove("active");
  });
});
