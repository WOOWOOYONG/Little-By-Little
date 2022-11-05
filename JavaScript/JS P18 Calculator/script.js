let equal_pressed = 0;
//all buttons
const button_input = document.querySelectorAll(".input-button");

// input equal clear erase
const input = document.getElementById("input");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    } else if (input.value == 0) {
      input.value = button_class.value;
    } else {
      //display value of each button
      input.value += button_class.value;
    }
  });
});

//Solve the user's input when clicked on equal button
equal.addEventListener("click", () => {
  equal_pressed = 1;
  const inp_val = input.value;
  try {
    //evaluate user's input
    const result = eval(inp_val);
    //True for natural numbers
    //False for decimals
    if (Number.isInteger(result)) {
      input.value = result;
    } else {
      input.value = result.toFixed(2);
    }
  } catch (err) {
    console.log(err);
    alert("Invalid Input");
    input.value = "";
  }
});

//clear whole input
clear.addEventListener("click", () => {
  input.value = "";
});

//erase single digit
erase.addEventListener("click", () => {
  input.value = input.value.substring(0, input.value.length - 1);
});
