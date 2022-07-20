let Uncompleted_task = document.querySelector(".task_container-Notcompleted-task");
let completed_task = document.querySelector(".completed-task");
let container = document.querySelector(".container")
let add_newTask = document.querySelector(".add_new--task");
let submit_task = document.querySelector(".submit_task");
let overlay = document.querySelector(".overlay")
let message = document.querySelector(".message");
let yes = document.querySelector(".yes")
let No = document.querySelector(".no")


let showEmptyMess = function () {
  overlay.classList.remove("hidden")
 let message = document.createElement('div')
 message.classList.add("message");
 container.appendChild(message);
 let messageH3 = document.createElement('h3')
 message.appendChild(messageH3)
 messageH3.innerText = "please fill out the task"
 let messageControl = document.createElement("button")
 message.appendChild(messageControl)
 messageControl.classList.add("control")
 messageControl.innerText = "ok"
 messageControl.addEventListener("click", function () {
 container.removeChild(message)
 overlay.classList.add("hidden")
} )
}

// 
submit_task.addEventListener("click", function (e) {
    e.preventDefault()
  let taskValue = add_newTask.value 
  let taskEl = document.createElement("div");
  let contentEL = document.createElement("div");
  let task_textEl = document.createElement("input"); 
  let task_actionEl = document.createElement("div");
  let buttonCompel = document.createElement("button");
  let iconCompel = document.createElement("i");
  let buttonDele = document.createElement("button");
  let buttonDeleComp = document.createElement("button");
  let iconDele = document.createElement("i");
  let buttonEdit = document.createElement("button");
  let iconEdit = document.createElement("i");
  

if (taskValue === '') {

  add_newTask.focus(No)
  showEmptyMess()
   
 }else{
  // taskEl.classList.add("task")
  Uncompleted_task.appendChild(taskEl) 
  taskEl.append(contentEL,task_actionEl)
  task_actionEl.classList.add("task_action")
  contentEL.appendChild(task_textEl) 
  contentEL.classList.add("content");
  task_textEl.classList.add("task_text");
  taskEl.classList.add("task")
  task_textEl.setAttribute("readonly" ,"readonly");
  task_textEl.value = taskValue;
  add_newTask.value = "";

  // adding the action button 

// adding the compel
  task_actionEl.appendChild(buttonCompel)
  buttonCompel.appendChild(iconCompel)
  iconCompel.classList.add("fas","fa-check" ,"completed_task")

  // adding the delete button
  task_actionEl.appendChild(buttonDele)
  buttonDele.appendChild(iconDele)
  iconDele.classList.add("delete_task","fas","fa-trash")

    // adding the edit button
  task_actionEl.appendChild(buttonEdit)
  buttonEdit.appendChild(iconEdit)
  iconEdit.classList.add("edit_task","fas","fa-ellipsis-vertical")

}

buttonDele.addEventListener("click", function () {
 overlay.classList.remove("hidden")
 message.classList.remove("hidden")
 No.addEventListener("click", function () {
overlay.classList.add("hidden")
message.classList.add("hidden")  
})
yes.addEventListener("click", function () {
 Uncompleted_task.removeChild(taskEl);
 overlay.classList.add("hidden")
 message.classList.add("hidden")  
})
})


buttonEdit.addEventListener("click",function () {
   
     if (task_textEl.hasAttribute("readonly")) {
       console.log("true"); 
        task_textEl.removeAttribute("readonly");
        task_textEl.focus()
        iconEdit.classList.add("fa-edit")

     }else{
       console.log("false");
        task_textEl.setAttribute("readonly" ,"readonly");
        iconEdit.classList.remove("fa-edit")
     }

 
})
 
buttonCompel.addEventListener("click", function (e) {
  let change = Uncompleted_task.removeChild(taskEl);
  completed_task.appendChild(change)
  //  removing the other action
  change.children[1].children[0].remove();
  change.children[1].children[1].remove();
  change.children[1].children[0].remove()
  // adding
   change.children[1].appendChild(buttonDeleComp);
  buttonDeleComp.appendChild(iconDele)
  iconDele.classList.add("delete_task","fas","fa-trash")
 
  console.log(change);
})



 buttonDeleComp.addEventListener("click", function () {
    completed_task.removeChild(taskEl);
    
 })
})
