const filltaskRef = document.querySelector(".form-background"); // Filling form window
const closeformRef = document.getElementById("close-form"); //Close filling form window
const formRef = document.querySelector(".form");
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

//task list options ----------------------------
const toDoOptionRef = document.getElementById("ToDo");
const inProgressOptionRef = document.getElementById("InProgress");
const stuckOptionRef = document.getElementById("Stuck");
const doneOptionRef = document.getElementById("Done");

const listUlRef = document.getElementsByClassName("box"); // Pusshing chilrden in here
// console.log("Ul -", listUlRef[0].children[1]);
// -------------------------------------------------------
const titleRef = document.getElementsByClassName("title");
console.log(titleRef);
console.log("h2 -", titleRef[0].getAttribute("data-status"));
// -------------------------------------------------------
const selectRef = document.getElementById("lists-of-option");
// console.log("selectRef -", selectRef[0].value);
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
    const title = document.getElementById("titleinput");
    const description = document.getElementById("textinput");
    title.style.border = "solid 1.5px red";
    description.style.border = "solid 1.5px red";

    // alert("Please fill the Title or Description");
  } else {
    const buttonCheck = document.createElement("button");
    buttonCheck.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
    buttonCheck.setAttribute("onclick", "doneTask(this)");

    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    buttonDelete.setAttribute("onclick", "deleteTask(this)");

    const buttonEdit = document.createElement("button");
    buttonEdit.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
    buttonEdit.addEventListener("click", (event) =>
      openEditTask(event, subdiv)
    );
    //Create and adding new 'div' with draggable ==========================
    const dropAbleTodoRef = document.getElementById("box01");
    const dropAbleInProgRef = document.getElementById("box02");
    const dropAbleStuckRef = document.getElementById("box03");
    const dropAbleDonegRef = document.getElementById("box04");

    const subdiv = document.createElement("div");
    subdiv.setAttribute("draggable", "true");
    subdiv.setAttribute("class", "dragg");
    // Drag scene + + + + + + + + + + + + + + + + + + + + + + + + + + + +
    subdiv.addEventListener("dragstart", (event) => {
      event.target.classList.add("pulled");
    });
    subdiv.addEventListener("drag", (event) => {});
    subdiv.addEventListener("dragend", (event) => {
      event.target.classList.remove("pulled");
    });
    // Drop scene + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
    // Drop to do - - - - - - - - - - - - - - - - - - - - -
    dropAbleTodoRef.addEventListener("dragenter", (event) => {
      event.target.style.boxshadow = "10px 10px 10px #000";
    });
    dropAbleTodoRef.addEventListener("dragover", (event) => {
      event.preventDefault();
      const dragCard = document.getElementsByClassName("pulled")[0];
      const dropSite = event.target.children[1];
      dropSite.appendChild(dragCard);
    });
    dropAbleTodoRef.addEventListener("dragleave", (event) => {
      event.target.style.border = "none";
    });
    dropAbleTodoRef.addEventListener("drop", (event) => {
      event.target.style.border = "none";
      const dragCard = document.getElementsByClassName("pulled")[0];
      const dropSite = event.target.children[1];
      dropSite.appendChild(dragCard);
      count();
    });
    // Drop in progress - - - - - - - - - - - - - - - - -
    dropAbleInProgRef.addEventListener("dragenter", (event) => {
      event.target.style.boxshadow = "10px 10px 10px #000";
      // console.log("dragenter", dropAbleInProgRef);
    });
    dropAbleInProgRef.addEventListener("dragover", (event) => {
      event.preventDefault();
      const dragCard = document.getElementsByClassName("pulled")[0];
      const dropSite = event.target.children[1];
      dropSite.appendChild(dragCard);
    });
    dropAbleInProgRef.addEventListener("dragleave", (event) => {
      // console.log("drag leave");
      event.target.style.border = "none";
    });
    dropAbleInProgRef.addEventListener("drop", (event) => {
      event.target.style.border = "none";
      const dragCard = document.getElementsByClassName("pulled")[0];
      const dropSite = event.target.children[1];
      dropSite.appendChild(dragCard);
      // console.log("drop", event.target);
      count();
    });
    // Drop stuck - - - - - - - - - - - - - - - - - - - - -
    dropAbleStuckRef.addEventListener("dragenter", (event) => {
      event.target.style.boxshadow = "10px 10px 10px #000";
    });
    dropAbleStuckRef.addEventListener("dragover", (event) => {
      event.preventDefault();
      const dragCard = document.getElementsByClassName("pulled")[0];
      const dropSite = event.target.children[1];
      dropSite.appendChild(dragCard);
    });
    dropAbleStuckRef.addEventListener("dragleave", (event) => {
      event.target.style.border = "none";
    });
    dropAbleStuckRef.addEventListener("drop", (event) => {
      event.target.style.border = "none";
      const dragCard = document.getElementsByClassName("pulled")[0];
      const dropSite = event.target.children[1];
      dropSite.appendChild(dragCard);
      count();
    });
    // Drop done - - - - - - - - - - - - - - - - - - - - -
    dropAbleDonegRef.addEventListener("dragenter", (event) => {
      event.target.style.boxshadow = "10px 10px 10px #000";
    });
    dropAbleDonegRef.addEventListener("dragover", (event) => {
      event.preventDefault();
      // const dragCard = document.getElementsByClassName("pulled")[0];
      // const dropSite = event.target.children[1];
      // // console.log("event drop -", event.target.children[1]);
      // dropSite.appendChild(dragCard);
    });
    dropAbleDonegRef.addEventListener("dragleave", (event) => {
      event.target.style.border = "none";
    });
    dropAbleDonegRef.addEventListener("drop", (event) => {
      event.target.style.border = "none";
      const dragCard = document.getElementsByClassName("pulled")[0];
      const dropSite = event.target.children[1];
      // console.log("event drop -", event.target.children[1]);
      // event.innerHTML = "";
      // event.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      dropSite.appendChild(dragCard);
      count();
    });
    // ===========================================================
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
    priority.setAttribute("id", "prior");

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
    for (let i = 0; i < titleRef.length; i++) {
      for (let j = i; j < selectRef.length; j++) {
        if (selectRef.value === titleRef[i].getAttribute("data-status")) {
          listUlRef[i].children[1].appendChild(subdiv);
          count();
        }
      }
    }
    filltaskRef.style.display = "none";
  }
  count();
  taskTitleRef.value = "";
  taskDescriptionRef.value = "";
}
// Delete function begins here: ============================
function deleteTask(event) {
  // console.log("event -", event);
  let parent = event.parentNode.parentNode.parentNode;
  let child = event.parentNode.parentNode;
  // console.log("parent", parent, "child", child);
  parent.removeChild(child);
  count();
}

// Edit task from begins here:=====================================
const editTaskWindowRef = document.querySelector(".edit-background");
const editTitleInputRef = document.getElementById("edittitleinput");
const editDescrInputRef = document.getElementById("edittextinput");
const editSelectRef = document.getElementById("edit-lists-of-option");
const editPriorityRef = document.getElementById("editpriority");

function openEditTask(event, subdiv) {
  editTaskWindowRef.style.display = "flex";
  const title = subdiv.getElementsByClassName("title_editable")[0];
  // console.log(title);
  const description = subdiv.getElementsByClassName("description_editable")[0];
  editTitleInputRef.value = title.innerText;
  editDescrInputRef.value = description.innerText;
  const editTaskDone = document.getElementById("edittaskdone");

  const priorityContent = description.parentNode.children[2].textContent;
  // console.log(editPriorityRef[0].value);
  for (i = 0; i < editPriorityRef.length; i++) {
    if (editPriorityRef[i].value === priorityContent.toLowerCase()) {
      editPriorityRef.value = editPriorityRef[i].value;
    }
  }

  // Edit task done begins here: ====================================
  editTaskDone.onclick = () => {
    // console.log("calling");
    title.textContent = editTitleInputRef.value;
    description.textContent = editDescrInputRef.value;
    editTaskWindowRef.style.display = "none";
    const editSelectRef = document.getElementById("edit-lists-of-option");
    console.log(editSelectRef);
    const editPriorityRef = document.getElementById("editpriority");
    console.log("editPriorityRef", editPriorityRef);
    const editPrior = document.getElementById("prior");
    console.log("editPrior", editPrior);
    // for (let i = 0; i < editPriorityRef.length; i++) {
    //   if (editPriorityRef[i].value) {
    //     editPrior.textContent = editPriorityRef.value;
    //   }
    // }
    for (let i = 0; i < titleRef.length; i++) {
      if (editSelectRef.value === titleRef[i].getAttribute("data-status")) {
        listUlRef[i].children[1].appendChild(subdiv);
      }
      for (let i = 0; i < editPriorityRef.length; i++) {
        // console.log("editPriorityRef[i].value", editPriorityRef[1].innerText);
        if (editPriorityRef[i].value === editPriorityRef.value) {
          const priorityText = description.parentNode.children[2];
          priorityText.textContent = editPriorityRef[i].innerText;
        }
      }
      count();
    }
    // Done btn --------------------------------------------------------------------
    for (let i = 0; i < editPriorityRef.length; i++) {
      const taskDoneBtn =
        description.parentNode.parentNode.children[0].children[0];
      if (editSelectRef.value === titleRef[3].getAttribute("data-status")) {
        const taskDoneBtn =
          description.parentNode.parentNode.children[0].children[0];
        taskDoneBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      }
      count();
    }
    // Todo, InPro, Stuck btn------------------------------------------------------------------------------
    for (let i = 0; i < editPriorityRef.length; i++) {
      const taskDoneBtn =
        description.parentNode.parentNode.children[0].children[0];
      if (
        editSelectRef.value === titleRef[0].getAttribute("data-status") ||
        editSelectRef.value === titleRef[1].getAttribute("data-status") ||
        editSelectRef.value === titleRef[2].getAttribute("data-status")
      ) {
        const taskDoneBtn =
          description.parentNode.parentNode.children[0].children[0];
        taskDoneBtn.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
      }
      count();
    }
  };
}
editTitleInputRef.value = "";
editDescrInputRef.value = "";
// Task done button ========================================================
function doneTask(event) {
  const preDone = event.parentNode.parentNode;
  const doneDiv = document.getElementById("list-done");
  event.innerHTML = "";
  event.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  doneDiv.appendChild(preDone);
  count();
}
function count() {
  // Add Counting begins here: =========================================
  const countTodo = document.getElementById("list-todo").childElementCount;
  const countInPro = document.getElementById("list-progress").childElementCount;
  const countStuck = document.getElementById("list-stuck").childElementCount;
  const countDone = document.getElementById("list-done").childElementCount;
  //+++++++++++++
  const numbTodo =
    document.getElementsByClassName("box")[0].children[0].children[1];
  const numbInPro =
    document.getElementsByClassName("box")[1].children[0].children[1];
  // console.log(numbInPro, "numb");
  const numbStuck =
    document.getElementsByClassName("box")[2].children[0].children[1];
  // console.log(numbInPro, "numb");
  const numbDone =
    document.getElementsByClassName("box")[3].children[0].children[1];
  //+++++++++++++
  // console.log(numbInPro, "numb");
  numbTodo.innerText = countTodo;
  numbInPro.innerText = countInPro;
  numbStuck.innerText = countStuck;
  numbDone.innerText = countDone;
} // -----------------------------------------------------------------
