const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const alertMessage = document.querySelector(".alert");

const addTask = () => {
    if (inputBox.value === ""){
        alertMessage.style.display = "block";
    } else {
        alertMessage.style.display = "none";
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", (e)=> {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}