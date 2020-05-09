const clearItemBtn = document.querySelector("#clear-list");
const input = document.querySelector("input");
const addItemBtn = document.querySelector("#itemForm > div > div > button");
const itemList = document.querySelector("ul");

const items = [];
const addItem = (e) => {
  e.preventDefault();
  if (input.value.trim() !== "") {
    const singleItem = document.createElement("li");
    singleItem.innerHTML = `<div class="item my-3">
<h5 class="item-name text-capitalize">${input.value}</h5>
<div class="item-icons">
 <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
 <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
 <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
</div>
</div>`;
    items.push(singleItem);

    itemList.append(singleItem);

    const deleteItem = () => {
      itemList.removeChild(singleItem);
    };

    const doneTask = () => {
      if (singleItem.style.textDecoration !== "line-through") {
        singleItem.style.textDecoration = "line-through";
      } else {
        singleItem.style.textDecoration = "";
      }
    };

    singleItem
      .querySelector("a.delete-item.item-icon")
      .addEventListener("click", deleteItem);
    singleItem
      .querySelector("a.complete-item.mx-2.item-icon")
      .addEventListener("click", doneTask);
  } else {
    const alertMessage = document.querySelector(
      "body > div > div > div > div.alert.text-capitalize.feedback"
    );
    // alertMessage.style.display = "block";
    alertMessage.classList.add("showItem");
    alertMessage.classList.add("alert-danger");

    alertMessage.textContent = "Please enter valid value";

    window.setTimeout(function () {
      alertMessage.classList.remove("showItem");
    }, 2000);
  }
  input.value = "";
};

const clear = () => {
  itemList.textContent = "";
};

addItemBtn.addEventListener("click", addItem);
clearItemBtn.addEventListener("click", clear);
