const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);

  if (inputTask.value === "") {
    alert("Please Enter a Task");
  } else {
    taskContainer.appendChild(task);
  }

  inputTask.value = "";

  checkButton.addEventListener("click", function () {
    task.classList.toggle("checked");
  });
  deleteButton.addEventListener("click", function () {
    task.remove();
  });

  // deleteButton.addEventListener("click", function (e) {
  //   console.log(deleteButton);
  //   console.log(e.target.parentElement);
  //   e.target.parentElement.remove();
  // });
});
