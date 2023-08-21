const container = document.getElementById("container")
const add_btn = document.querySelector(".add_btn")
const input = document.querySelector(".task_box")


let tasks = 0;

container.addEventListener("click", (event)=>{
    if(event.target.classList.contains("remove")){
        event.target.closest(".task").remove();
        tasks--;
    }
    else if(event.target.classList.contains("checkmark")){

        if(event.target.style.backgroundColor === "lightgreen"){
            event.target.style.backgroundColor = "rgb(238, 94, 94)";
        }
        else{
            event.target.style.backgroundColor = "lightgreen";
        }
      
        
    }
})


add_btn.addEventListener("click",()=>{
    const input_value = input.value

    if(input_value != "" && tasks < 10){
        const taskDiv = document.createElement("div")
    
        taskDiv.innerHTML = "<div class='task'><div class='todo'><p>"+input_value+"</p></div><div class='btn_group'><button id='checkmark' class='checkmark'>✓</button><button class='remove'>✕</button></div></div>"
        tasks += 1;
        container.appendChild(taskDiv)
        input.value = ""

    }

    
    
})

