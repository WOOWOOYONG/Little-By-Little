const baby = document.querySelector(".baby");
const boy = document.querySelector(".boy");
const man = document.querySelector(".man");
const evlove = document.querySelector(".evlove");

// let count = 0;

// evlove.addEventListener("click", () => {
//   count++;
//   if (count >= 1 && count < 2) {
//     boy.classList.add("active");
//     baby.classList.remove("active");
//   } else if (count == 2) {
//     boy.classList.remove("active");
//     man.classList.add("active");
//   }
// });

let count = 0;
const pokemons = [baby, boy, man];

evlove.addEventListener("click", () => {
  count++;

  if (count < 3) {
    pokemons[count].classList.add("active");
    pokemons[count - 1].classList.remove("active");
  } else if (count == 3) {
    count = 0;
    pokemons.forEach((poke) => {
      poke.classList.remove("active");
    });
    pokemons[count].classList.add("active");
  }
  if (count == 2) {
    evlove.textContent = "RESET";
  } else {
    evlove.textContent = "進化";
  }

  //   console.log(count);
});
