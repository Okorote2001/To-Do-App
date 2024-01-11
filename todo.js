const input = document.querySelector(".input")
const list = document.querySelector(".unorderList");
console.log(list.innerHTML);

function addTask() {
    if(input.value == ''){
        alert('You must add an Event');
    }
    else{
        const events = document.createElement("li");
        events.innerHTML = `<div class="Note">${input.value}</div><span class="cancel">X</span>`;
        list.appendChild(events);
        console.log(events)
    }
    input.value = '';
    setData()
}

// list.addEventListener("click", function(e){
//     if(e.target.className === "cancel"){
//       e.target.parentElement.remove();
//       setData()  
//     }
//     else if (e.target.className === "Note" || e.target.className === "Note li"){
//         e.target.classList.toggle("li");
//         e.target.parentElement.classList.toggle("before");
//         setData()
//     }
//     else if(e.target.tagName === "LI"){
//         e.target.classList.toggle("before");
//         e.target.firstChild.classList.toggle("li");
//         setData()
//     }
// }, false);

list.addEventListener("click", function(e){
    if(e.target.className === "cancel"){
      e.target.parentElement.remove();
      setData()  
    }
    else if (e.target.className === "Note" || e.target.className === "Note NoteBackground"){
        e.target.parentElement.classList.toggle("li");
        e.target.parentElement.classList.toggle("before");
        e.target.classList.toggle("NoteBackground");
        setData()
    }
    else if(e.target.tagName === "LI"){
        e.target.classList.toggle("before");
        e.target.classList.toggle("li");
        e.target.firstChild.classList.toggle("NoteBackground");
        setData()
    }
}, false);

function setData(){
    localStorage.setItem("data", list.innerHTML);
}

function showTask(){
   list.innerHTML = localStorage.getItem("data");
}

showTask();