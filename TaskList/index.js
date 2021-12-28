import UI from './UI.js'
import TASK from './TASK.js'

const inputTask = document.querySelector('#newtaskID');
const addTaskBtn = document.querySelector('.AddTaskBtn');
const cancelTaskBtn = document.querySelector('.CancelTaskBtn');
const editTaskBtn = document.querySelector('.EditTaskBtn');
const taskList = document.querySelector('.task-list');
const ui = new UI();

ui.showAllTasks(taskList);

addTaskBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    const newTask = new TASK(inputTask.value);
    if(newTask.title.length > 0){
        ui.addNewTask(newTask, taskList);
        ui.resetForm(inputTask);
    }
})

cancelTaskBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    ui.cancelTask(inputTask);
})

editTaskBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    if(inputTask.value){
        ui.updateTask(inputTask);
    }
})

taskList.addEventListener('click', (event)=> {
    const target = event.target;

    if(target.className.includes("task__op_delete"))
        ui.deleteTask(target);

    if(target.className.includes("task-check"))
        ui.completeTask(target);

    if(target.className.includes("task__op_edit"))
        ui.editTask(target, inputTask);
})