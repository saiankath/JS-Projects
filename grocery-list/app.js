// ****** SELECT ITEMS **********
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********


// ****** FUNCTIONS **********
const addItem = (e) => {
  e.preventDefault();
  const value = grocery.value
  const id = new Date().getTime().toString();

  if(value && !editFlag) {
    const element  = document.createElement("article")
    element.classList.add("grocery-item")
    const attr = document.createAttribute("data-id")
    attr.value = id;
   element.setAttributeNode(attr)
   element.innerHTML = `<p class="title">${value}</p>
   <div class="btn-container">
     <!-- edit btn -->
     <button type="button" class="edit-btn">
       <i class="fas fa-edit"></i>
     </button>
     <!-- delete btn -->
     <button type="button" class="delete-btn">
       <i class="fas fa-trash"></i>
     </button>
   </div>`;
   list.appendChild(element)
   displayAlert("item added to the list", "success")
   container.classList.add("show-container")
   addToLocalStorage(id, value)
   setBackToDefault()
  }
  else if (value && editFlag){

  } 
  else {
    displayAlert("enter some value", "danger")
  }
  
  }
 
  const displayAlert = (text, action) => {
      alert.textContent = text;
      alert.classList.add(`alert-${action}`)

      setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`)
      }, 1000)
  } 

  form.addEventListener("submit", addItem)

 //set back to default
 function setBackToDefault() {

 } 

// ****** LOCAL STORAGE **********

// add to local storage
function addToLocalStorage(id, value) {
    const grocery = { id, value };
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
  }
  
  function getLocalStorage() {
    return localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];
  }
  

  // SETUP LOCALSTORAGE.REMOVEITEM('LIST');
  

// ****** SETUP ITEMS **********
