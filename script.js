const filltaskRef = document.querySelector(".form-background"); // Filling form window
const closeformRef = document.getElementById("close-form"); //Close filling form window
const formRef = document.querySelector(".form");
// console.log(filltaskRef);
const taskTitleRef = document.getElementById("titleinput"); // Form title field
// console.log("title", taskTitleRef);
const taskDescriptionRef = document.getElementById("textinput"); // Form description field
// console.log("descriptipn", taskDescriptionRef);
//task list boxes
// const listtodoRef = document.getElementById("list-todo"); // UL list-todo
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

const listUlRef = document.getElementsByClassName("box"); // Pusshing chilrden in here
console.log("Ul -", listUlRef[0].children[1]);
// -------------------------------------------------------
const titleRef = document.getElementsByClassName("title");
console.log("h2 -", titleRef[0].getAttribute("data-status"));
// -------------------------------------------------------
const selectRef = document.getElementById("lists-of-option");
console.log("selectRef -", selectRef[0].value);
// -------------------------------------------------------
const priorityRef = document.getElementById("priority");

function orderTask() {
  filltaskRef.style.display = "flex";
}
function closeTask() {
  filltaskRef.style.display = "none";
  editTaskWindowRef.style.display = "none";
}

function addTask() {
  if (taskTitleRef.value === "" && taskDescriptionRef.value === "") {
    alert("Please fill the Title or Description");
  } else {
    const buttonCheck = document.createElement("button");
    buttonCheck.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;

    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    buttonDelete.setAttribute("onclick", "deleteTask(this)");

    const buttonEdit = document.createElement("button");
    buttonEdit.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
    buttonEdit.addEventListener("click", (event) =>
      openEditTask(event, subdiv)
    );
    const subdiv = document.createElement("div");
    subdiv.setAttribute("draggable", "true");
    const subdiv01 = document.createElement("div");
    const subdiv02 = document.createElement("div");
    const subdiv03 = document.createElement("div");
    const title = document.createElement("p");
    title.setAttribute("class", "title_editable");
    title.setAttribute("value", "title");
    title.textContent = taskTitleRef.value;
    const description = document.createElement("p");
    description.setAttribute("class", "description_editable");
    description.textContent = taskDescriptionRef.value;
    const priority = document.createElement("div");
    //

    const countableDone =
      dropAbleTodoRef.getElementsByClassName("title_editable");
    const countDone = dropAbleTodoRef.children[0].children[1];
    for (let i = 1; i < dropAbleTodoRef.length + 1; i++) {
      countDone.innerText = i + 1;
    }
    console.log(countDone.innerText);
    //
    for (let i = 0; i < priorityRef.length; i++) {
      if (priorityRef.value === priorityRef[i].textContent.toLowerCase()) {
        priority.textContent = priorityRef[i].textContent;
      }
    }
    subdiv01.appendChild(buttonCheck);
    subdiv02.appendChild(title);
    subdiv02.appendChild(description);
    subdiv02.appendChild(priority);
    subdiv03.appendChild(buttonDelete);
    subdiv03.appendChild(buttonEdit);
    subdiv.appendChild(subdiv01);
    subdiv.appendChild(subdiv02);
    subdiv.appendChild(subdiv03);
    // console.log(title, description);
    for (let i = 0; i < titleRef.length; i++) {
      for (let j = i; j < selectRef.length; j++) {
        if (selectRef.value === titleRef[i].getAttribute("data-status")) {
          // console.log(
          //   selectRef[j].value,
          //   titleRef[i].getAttribute("data-status")
          // );
          listUlRef[i].children[1].appendChild(subdiv);
        }
      }
    }

    // listtodoRef.appendChild(title);
    // listtodoRef.appendChild(description);
    filltaskRef.style.display = "none";
  }
  taskTitleRef.value = "";
  taskDescriptionRef.value = "";
}
function deleteTask(event) {
  console.log("event -", event);
  let parent = event.parentNode.parentNode.parentNode;
  let child = event.parentNode.parentNode;
  console.log(parent, child);
  parent.removeChild(child);
}

// Edit task from begins here:=====================================
const editTaskWindowRef = document.querySelector(".edit-background");
const editTitleInputRef = document.getElementById("edittitleinput");
const editDescrInputRef = document.getElementById("edittextinput");

function openEditTask(event, subdiv) {
  editTaskWindowRef.style.display = "flex";
  const title = subdiv.getElementsByClassName("title_editable")[0];
  // console.log(title);
  const description = subdiv.getElementsByClassName("description_editable")[0];
  editTitleInputRef.value = title.innerText;
  editDescrInputRef.value = description.innerText;
  const editTaskDone = document.getElementById("edittaskdone");
  // Edit task done begins here: ====================================
  editTaskDone.onclick = () => {
    // console.log("calling");
    title.textContent = editTitleInputRef.value;
    description.textContent = editDescrInputRef.value;
    editTaskWindowRef.style.display = "none";
  };
}
editTitleInputRef.value = "";
editDescrInputRef.value = "";
//drag and drop ====================================================

const draggAbleBoxesRef = document.querySelectorAll(".list");
const draggAbleTodoRef = draggAbleBoxesRef[0];
const draggAbleInProgRef = draggAbleBoxesRef[1];
const draggAbleStuckRef = draggAbleBoxesRef[2];
const draggAbleDoneRef = draggAbleBoxesRef[3];

const dropAbleTodoRef = document.getElementById("box01");
const dropAbleInProgRef = document.getElementById("box02");
const dropAbleStuckRef = document.getElementById("box03");
const dropAbleDonegRef = document.getElementById("box04");
console.log(dropAbleTodoRef, dropAbleInProgRef);

//drop -------------------------------------------------------------
// dropAbleTodoRef.addEventListener("dragenter", (event) => {});

// Counting negins here: ===========================================

// const countableDone = dropAbleTodoRef.querySelectorAll(".title_editable");
// console.log(countableDone);
