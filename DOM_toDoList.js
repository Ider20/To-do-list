// const addTask = document.getElementById("todolist");
const deleteToDo = document.getElementById("deletetodo");
const toDoList = document.getElementById("listoftask");
const inputToDO = document.getElementById("toDoInput");
// let listArray = [];
let pElement = "";
let num = 0;
function addText() {
  let btn = "";
  if (inputToDO.value === "") {
    alert("Ажлын нэрээ оруулна уу!");
  } else {
    pElement = document.createElement("li");
    let tNode = document.createTextNode(inputToDO.value);
    pElement.appendChild(tNode);
    pElement.style.color = "white";
    pElement.setAttribute("class", "list");
    pElement.setAttribute("id", num);
    console.log(toDoList.children);
    let test = document.getElementsByClassName("list");
    // console.log(test);
    console.log(pElement);
    toDoList.appendChild(pElement);
    // delete button
    let span = document.createElement("span");
    btn = document.createElement("button");
    btn.setAttribute("onclick", "deleteBtn(this)");
    btn.setAttribute("id", num);
    num++;
    btn.innerText = "Delete";
    span.appendChild(btn);
    pElement.appendChild(span);
    // console.log(btn);
    // console.log(pElement);
    // listArray.push(pElement);
  }
  //   console.log(listArray);
  inputToDO.value = "";
  // document.querySelector(".list").addEventListener("click", () => {
  //   toDoList.this.removeChild(pElement);
  // });
}
function deleteBtn(e) {
  console.log("e", e);
  let parent = e.parentNode.parentNode.parentNode;
  console.log("parent", parent);
  let child = e.parentNode.parentNode;
  parent.removeChild(child);

  // for (i = 0; i < paragraphs.length; i++){
  //   if()
  // }
}
//   console.log(pElement);

//   toDoList.appendChild(pElement);

// value of input
// create elemet
// add element using appendChild

// add value of input into child element
