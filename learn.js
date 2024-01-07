const list = document.getElementById("list")
const addList = document.querySelector(".add_list")

let count = 0
function createList(){
    if(!list.value){
        alert("Please enter a value!!")
    }else{
        count++;
        const newLi = document.createElement("li");
        newLi.innerHTML = list.value;
        addList.appendChild(newLi);
        const index = document.createElement("span");
        index.innerHTML = count;
        const newSpan = document.createElement("span");
        newSpan.innerText = "x";
        newLi.appendChild(newSpan)
        const hr = document.createElement("hr");
        newLi.appendChild(hr)
        list.value = null;
        saveData()
    }
}

addList.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("change")
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data", addList.innerHTML)
}

function showTask(){
    addList.innerHTML = localStorage.getItem("data")
}

showTask()