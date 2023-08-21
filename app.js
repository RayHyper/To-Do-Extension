const container = document.getElementById("container")
const add_btn = document.querySelector(".add_btn")
const input = document.querySelector(".task_box")


let tasks_list = []

//set number of tasks to 0
let tasks = 0;

//when one of the buttons are clicked on a task
container.addEventListener("click", (event)=>{
    //if remove button pressed
    if(event.target.classList.contains("remove")){
        //remove task
        event.target.closest(".task").remove();
        tasks--;
    }
    //if checkmark button pressed
    else if(event.target.classList.contains("checkmark")){

        //turn button green
        if(event.target.style.backgroundColor === "lightgreen"){
            //if already green turn it red
            event.target.style.backgroundColor = "rgb(238, 94, 94)";
        }
        else{
        //if button is red turn it green
            event.target.style.backgroundColor = "lightgreen";
        }
      
        
    }
})

//when add button pressed add task
add_btn.addEventListener("click",()=>{
    addTask()
})

//when enter key is pressed add task
document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
            addTask()
    }
});


function addTask(){
    //get input from user
    const input_value = input.value

    tasks_list.push(input_value)

    //make sure tasks less than 10 and input is not empty
    if(input_value != "" && tasks < 10){
        //make a new div
        const taskDiv = document.createElement("div")
    
        //add the task div to it
        taskDiv.innerHTML = "<div class='task'><div class='todo'><p>"+input_value+"</p></div><div class='btn_group'><button id='checkmark' class='checkmark'>✓</button><button class='remove'>✕</button></div></div>"
        tasks += 1;

        //append task div to container
        container.appendChild(taskDiv)

        //make search bar empty
        input.value = ""

        console.log(tasks_list)

    }

}