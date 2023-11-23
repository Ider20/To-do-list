const filltaskRef = document.querySelector(".form-background"); // Filling form window
const closeformRef = document.getElementById("close-form"); //Closing filling form window
// console.log(filltaskRef);
const taskTitleRef = document.getElementById("titleinput"); // Form title field
// console.log("title", taskTitleRef);
const taskDescriptionRef = document.getElementById("textinput"); // Form description field
// console.log("descriptipn", taskDescriptionRef);
//task list boxes
const listtodoRef = document.getElementById("list-todo"); // UL list-todo
const listProgressRef = document.getElementById("list-progress"); //UL list-progress
const listStuckRef = document.getElementById("list-stuck"); // UL list-stuck
const listDoneRef = document.getElementById("list-done"); //UL list-Done

//task list options
const toDoOptionRef = document.getElementById("ToDo");
const inProgressOptionRef = document.getElementById("InProgress");
const stuckOptionRef = document.getElementById("Stuck");
const doneOptionRef = document.getElementById("Done");
// console.log(toDoOptionRef.innerHTML);
// console.log(inProgressOptionRef.innerHTML);
// console.log(stuckOptionRef.innerHTML);
// console.log(doneOptionRef.innerHTML);

const listUl = document.getElementsByClassName("box");
console.log("Ul -", listUl[0].children[1]);
// -------------------------------------------------------
const titleRef = document.getElementsByClassName("title");
console.log("h2 -", titleRef[0].getAttribute("data-status"));
// -------------------------------------------------------
const optionTaskRef = document.getElementsByClassName("taskoptions");
// selectiin ID-g barij avaad value-g ni gargana aaaaaaaaa
console.log("options text -", optionTaskRef[0].value);
// -------------------------------------------------------

function orderTask() {
  filltaskRef.style.display = "flex";
}
function closeTask() {
  filltaskRef.style.display = "none";
}

function addTask() {
  if (taskTitleRef.value === "" && taskDescriptionRef.value === "") {
    alert("Please fill the Title or Description");
  } else {
    const title = document.createElement("li");
    title.textContent = taskTitleRef.value;
    const description = document.createElement("p");
    description.textContent = taskDescriptionRef.value;
    // console.log(title, description);

    // for (let i = 0; i < titleRef.length; i++) {
    //   for (let j = i; j < optionTaskRef.length; j++) {
    //     if (optionTaskRef[j].innerText === titleRef[i].innerText) {
    //     }
    //   }
    // }

    // listtodoRef.appendChild(title);
    // listtodoRef.appendChild(description);
    filltaskRef.style.display = "none";
  }
  taskTitleRef.value = "";
  taskDescriptionRef.value = "";
}
