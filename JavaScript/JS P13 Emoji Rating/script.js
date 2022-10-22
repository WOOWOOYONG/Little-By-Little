const starsEls = document.querySelectorAll(".fa-star");
const emojisEls = document.querySelectorAll(".fa-regular");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);

starsEls.forEach((starsEl, index) => {
  starsEl.addEventListener("click", () => {
    updateRating(index);
  });
});

//star陣列內的index，如果小於點擊到的index+1，classlist + active，反之則移除active
function updateRating(index) {
  starsEls.forEach((starsEl, idx) => {
    if (idx < index + 1) {
      starsEl.classList.add("active");
    } else {
      starsEl.classList.remove("active");
    }
  });

  emojisEls.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
    emojiEl.style.color = colorsArray[index];
  });
}
