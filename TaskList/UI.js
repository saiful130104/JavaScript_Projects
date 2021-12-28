import LS from './LS.js';

function UI(){}

const ls = new LS();
const ui = new UI();
let tempId;

UI.prototype.showAllTasks = (taskList) => {
    const tasks = ls.fetchTasks();
    let newHtml = '';
    tasks.forEach(task => {
        newHtml += ui.makeTaskHtml(task);
    });
    taskList.innerHTML = newHtml;
}

UI.prototype.makeTaskHtml = (task) => {
    return `<div class="task ${task.isCompleted ? 'completed' : ''}" data-createdat="${task.id}">
    <div class="task__details">
      <input type="checkbox" class="task-check" ${task.isCompleted ? 'checked' : ''} />
      <label class="task-title">${task.title}</label>
    </div>

    <div class="task__op">
      <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
      <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
    </div>
  </div>`;
};

UI.prototype.addNewTask = (task, taskList) => {
    ls.storeTask(task);
    taskList.insertAdjacentHTML('afterbegin', ui.makeTaskHtml(task));
};

UI.prototype.resetForm = (form) => {
    form.value = "";
};

UI.prototype.deleteTask = (target) => {
    let targetTask = target.parentElement.parentElement ;
    let taskId = targetTask.dataset.createdat;
    targetTask.remove();
    ls.deleteTask(taskId);
};

UI.prototype.completeTask = (target) => {
    let targetTask = target.parentElement.parentElement ;
    let taskId = targetTask.dataset.createdat;
    targetTask.classList.toggle('completed');
    ls.completeTask(taskId);
};

UI.prototype.editTask = (target, inputTask) => {
    let targetTask = target.parentElement.parentElement ;
    let taskId = targetTask.dataset.createdat;
    let task = ls.findTask(taskId);
    tempId = task.id;
    inputTask.value = task.title;
    document.querySelector('.AddTaskBtn').style.display = 'none';
    document.querySelector('.EditTaskBtn').style.display = 'inline';
    document.querySelector('.CancelTaskBtn').style.display = 'inline';
}

UI.prototype.cancelTask = (inputTask) => {
    ui.resetForm(inputTask);
    document.querySelector('.AddTaskBtn').style.display = 'inline';
    document.querySelector('.EditTaskBtn').style.display = 'none';
    document.querySelector('.CancelTaskBtn').style.display = 'none';
}

UI.prototype.updateTask = (inputTask) => {
    let titles = document.querySelectorAll('.task-title');
    titles.forEach(title=>{
        if(title.parentElement.parentElement.dataset.createdat === tempId)
            title.innerText = inputTask.value;
    });
    ls.updateTask(tempId, inputTask.value);
    ui.cancelTask(inputTask);
}

export default UI;