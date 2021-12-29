import LS from './LS.js';
const ls = new LS();
let tempId;

class UI {
    showAllTasks(taskList) {
        const tasks = ls.fetchTasks();
        let newHtml = '';
        tasks.forEach(task => {
            newHtml += this.makeTaskHtml(task);
        });
        taskList.innerHTML = newHtml;
    }
    makeTaskHtml(task) {
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
    }
    addNewTask(task, taskList) {
        ls.storeTask(task);
        taskList.insertAdjacentHTML('afterbegin', this.makeTaskHtml(task));
    }
    resetForm(form) {
        form.value = "";
    }
    deleteTask(target) {
        let targetTask = target.parentElement.parentElement;
        let taskId = targetTask.dataset.createdat;
        targetTask.remove();
        ls.deleteTask(taskId);
    }
    completeTask(target) {
        let targetTask = target.parentElement.parentElement;
        let taskId = targetTask.dataset.createdat;
        targetTask.classList.toggle('completed');
        ls.completeTask(taskId);
    }
    editTask(target, inputTask) {
        let targetTask = target.parentElement.parentElement;
        let taskId = targetTask.dataset.createdat;
        let task = ls.findTask(taskId);
        tempId = task.id;
        inputTask.value = task.title;
        document.querySelector('.AddTaskBtn').style.display = 'none';
        document.querySelector('.EditTaskBtn').style.display = 'inline';
        document.querySelector('.CancelTaskBtn').style.display = 'inline';
    }
    cancelTask(inputTask) {
        this.resetForm(inputTask);
        document.querySelector('.AddTaskBtn').style.display = 'inline';
        document.querySelector('.EditTaskBtn').style.display = 'none';
        document.querySelector('.CancelTaskBtn').style.display = 'none';
    }
    updateTask(inputTask) {
        let titles = document.querySelectorAll('.task-title');
        titles.forEach(title => {
            if (title.parentElement.parentElement.dataset.createdat === tempId)
                title.innerText = inputTask.value;
        });
        ls.updateTask(tempId, inputTask.value);
        this.cancelTask(inputTask);
    }
}

export default UI;