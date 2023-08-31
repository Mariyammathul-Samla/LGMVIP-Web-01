const textBox = document.getElementById("text-box");
const listContainer = document.getElementById("list-container");
const addButton = document.querySelector(".todo-list button");
function Add() {
    if (textBox.value === '') {
        alert("Add a task!");
    }
    else {
        let list = document.createElement("li");
        list.innerHTML = textBox.value;
        listContainer.appendChild(list);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        list.appendChild(span);
    }
    textBox.value = "";
    save();
}
textBox.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addButton.click(); // Simulate a click on the Add button
    }
});

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check");
        save();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        save();
    }
},false);

function save(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function show(){
    listContainer.innerHTML=localStorage.getItem("data");
}

show();