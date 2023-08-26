const container = document.getElementById("container")
const add_btn = document.querySelector(".add_btn")
const input = document.querySelector(".task_box")
const containerImage = document.querySelector(".container");

let storedTasks = JSON.parse(localStorage.getItem("tasks"));

let tasks_list = []

//store state of check button
let storedColour =  [];

//set number of tasks to 0
let tasks = 0;



if (storedTasks) {
    for (const task of storedTasks) {
       
        //push task to list
        tasks_list.push(task)

        makeTask(task)
    }
}

//when one of the buttons are clicked on a task
container.addEventListener("click", (event)=>{
    //if remove button pressed
    if(event.target.classList.contains("remove")){

        //get index of task clicked
        const taskIndex = tasks_list.indexOf(event.target.closest(".task").querySelector(".todo p").textContent);
        if (taskIndex !== -1) {

            //remove task in list
            tasks_list.splice(taskIndex, 1);

            //remove the checked colour
            storedColour.splice(taskIndex,1)
           
           
        }


        //remove task
        event.target.closest(".task").remove();

        updateStorage();
        tasks--;
    }
    //if checkmark button pressed
    else if(event.target.classList.contains("checkmark")){

        //turn button green
        if(event.target.style.backgroundColor === "lightgreen"){
            //if already green turn it red
            event.target.style.backgroundColor = "rgb(238, 94, 94)";

            //get task index
            const taskIndex = tasks_list.indexOf(event.target.closest(".task").querySelector(".todo p").textContent);
            if (taskIndex !== -1) {
                //change checked colour to opposite
                storedColour[taskIndex] = "red"
            }

        }
        else{
        //if button is red turn it green
            event.target.style.backgroundColor = "lightgreen";

            //get task index
            const taskIndex = tasks_list.indexOf(event.target.closest(".task").querySelector(".todo p").textContent);
            if (taskIndex !== -1) {
                //change checked colour to opposite
                storedColour[taskIndex] = "green"
                    
            }    
        }
        updateStorage()
       
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

    storedColour.push("red")

    //get input from user
    const input_value = input.value

    //make sure tasks less than 10 and input is not empty
    if(input_value != "" && tasks < 8){

        tasks_list.push(input_value)

        makeTask(input_value)

    }
    updateStorage();

}

function updateStorage(){
    //make js list local storage
    let string = JSON.stringify(tasks_list)
    localStorage.setItem("tasks", string)

  //set storedColoured list to local storage
    localStorage.setItem("colours", JSON.stringify(storedColour));

}



function makeTask(task){
    console.log(storedColour)

    const taskDiv = document.createElement("div")


    //add the task div to it
    taskDiv.innerHTML = "<div class='task'><div class='todo'><p>"+task+"</p></div><div class='btn_group'><button id='checkmark' class='checkmark'>✓</button><button class='remove'>✕</button></div></div>"
    tasks += 1;


    //get colour order from local storage
    let storeColour = JSON.parse(localStorage.getItem("colours"));

    //if local storage is not empty and task is green
    if(storeColour && storeColour[tasks-1] === "green"){

        //make task green
        taskDiv.querySelector(".checkmark").style.backgroundColor = "lightgreen";

        //push to colour array
        storedColour.push("green")

    }
    //if local storage is not empty and task is red
    else if(storeColour && storeColour[tasks-1] === "red"){
         //make task red
        taskDiv.querySelector(".checkmark").style.backgroundColor = "rgb(238, 94, 94)";

        //push to colour array
        storedColour.push("red")
    }

    //append task div to container
    container.appendChild(taskDiv)



    //make search bar empty
    input.value = ""

}

