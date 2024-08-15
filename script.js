// variables
const button = document.querySelector(".button");

const inputBox = document.querySelector("#input-box");
const list = document.querySelector("#list-container");

const allertMessage = document.querySelector(".alert");


// function that creates "to do" text
const createText = () => {

    if (inputBox.value === ""){
        allertMessage.style.display = "block";
    } else {
        allertMessage.style.display = "none";

        createListItem();
    };
    inputBox.value = "";
};

const createListItem = () => {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
};

list.addEventListener("click", (event) => {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    } else if (event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }
});


button.addEventListener("click", ()=> {
    // add functions 
    createText();
});
