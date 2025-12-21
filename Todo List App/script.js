let myInput = document.getElementById("todoInput");
let mySearch = document.getElementById("searchInput");
let filterBtn = document.getElementById("filterButton");
let myList = document.getElementById("todoList");
let totalNum = document.getElementById("totalCount");
let doneNum = document.getElementById("completedCount");
let clearBtn = document.getElementById("clearButton");

let howManyTodos = 0;
let howManyDone = 0;
let showingAll = false;
let maxToShow = 5;

function updateCounts() {
  totalNum.innerHTML = howManyTodos;
  doneNum.innerHTML = howManyDone;
}

function hideExtraStuff() {
  if (showingAll) return;
  let items = myList.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = i < maxToShow ? "" : "none";
  }
}

filterBtn.onclick = function () {
  showingAll = true;
  let items = myList.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "";
  }
};

myInput.onkeyup = function (event) {
  if (event.keyCode == 13) {
    let whatToDo = myInput.value.trim();
    if (whatToDo == "") {
      alert("hey you gotta write something!");
      return;
    }

    let newItem = document.createElement("li");

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onclick = function () {
      howManyDone += checkBox.checked ? 1 : -1;
      updateCounts();
    };
    newItem.appendChild(checkBox);

    let textPart = document.createElement("span");
    textPart.innerHTML = whatToDo;
    newItem.appendChild(textPart);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "✖";
    deleteBtn.onclick = function () {
      if (checkBox.checked) howManyDone--;
      howManyTodos--;
      myList.removeChild(newItem);
      updateCounts();
      hideExtraStuff();
    };
    newItem.appendChild(deleteBtn);

    myList.appendChild(newItem);
    howManyTodos++;
    updateCounts();
    myInput.value = "";
    hideExtraStuff();
  }
};

mySearch.onkeyup = function () {
  let filter = mySearch.value.toLowerCase();
  let items = myList.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    let txt = items[i].getElementsByTagName("span")[0].innerHTML.toLowerCase();
    items[i].style.display = txt.indexOf(filter) > -1 ? "" : "none";
  }
};

clearBtn.onclick = function () {
  myList.innerHTML = "";
  howManyTodos = 0;
  howManyDone = 0;
  showingAll = false;
  updateCounts();
};
