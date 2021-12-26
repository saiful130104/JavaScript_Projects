import LS from './LS.js';

function UI(){}

const ls = new LS();
const ui = new UI();

UI.prototype.showAllTasks = (taskList) => {
    console.log("showAllTasks is called\n");
    const tasks = ls.fetchTasks();
    console.log(tasks);
    let newHtml = '';
    tasks.forEach(task => {
        newHtml += ui.makeTaskHtml(task);
    });
    taskList.innerHTML = newHtml;
}

UI.prototype.makeTaskHtml = (task) => {
    return `<div class="task" data-createdat="${task.id}">
    <div class="task__details">
      <input type="checkbox" class="task-check" />
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

export default UI;