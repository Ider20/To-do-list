const filltaskRef = document.querySelector(".form-background"); // Filling form window
const closeformRef = document.getElementById("close-form"); //Closing filling form window
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

const listUlRef = document.getElementsByClassName("box");
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
    buttonEdit.setAttribute("onclick", "editTask(this)");
    const subdiv = document.createElement("div");
    const subdiv01 = document.createElement("div");
    const subdiv02 = document.createElement("div");
    const subdiv03 = document.createElement("div");
    const title = document.createElement("p");
    title.setAttribute("id", "title_edit");
    title.textContent = taskTitleRef.value;
    const description = document.createElement("p");
    description.setAttribute("id", "description_edit");
    description.textContent = taskDescriptionRef.value;
    const priority = document.createElement("div");
    for (let i = 0; i < priorityRef.length; i++) {
      if (priorityRef.value === priorityRef[i].textContent.toLowerCase()) {
        priority.textContent = priorityRef[i].textContent;
      }
    }
    // console.log("priority lower -", priorityRef[0].textContent.toLowerCase());
    // console.log("priority -", priorityRef.value);
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

// const container = document.querySelector(".container");

// const deleteBtn = (text) => {
//   const btn = `<button><i class="fa-solid fa-trash"></i>${text}</button>`;
//   return btn;
// };

// container.innerHTML += deleteBtn("Update");
function editTask(event) {
  console.log("edit button -", event);
  filltaskRef.style.display = "flex";
  const addTaskButtonRef = document.getElementById("addtask");
  addTaskButtonRef.style.display = "none";
  const editTaskRef = document.createElement("button");
  editTaskRef.setAttribute("onclick", "editTaskEnd(this)");
  editTaskRef.innerText = "Edit Task";
  formRef.appendChild(editTaskRef);

  let parent = document.getElementById("title_edit");
  let child = document.getElementById("description_edit");
  taskTitleRef.value = parent.textContent;
  taskDescriptionRef.value = child.textContent;
  let parentDel = event.parentNode.parentNode.parentNode;
  let childDel = event.parentNode.parentNode;
  parentDel.removeChild(childDel);
  taskTitleRef.value = "";
  taskDescriptionRef.value = "";
}
function editTaskEnd(event) {
  // let parentDel = event.parentNode.parentNode.parentNode;
  // let childDel = event.parentNode.parentNode;
  // parentDel.removeChild(childDel);
  taskTitleRef.value = "";
  taskDescriptionRef.value = "";
}
