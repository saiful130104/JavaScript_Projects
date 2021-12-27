function LS(){}

const ls = new LS();
LS.prototype.fetchTasks = () => {
    let tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
};

LS.prototype.storeTask = (task) => {
    let tasks = ls.fetchTasks();
    tasks.unshift(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

LS.prototype.deleteTask = (id) => {
    let tasks = ls.fetchTasks();
    let index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

LS.prototype.completeTask = (id) => {
    let tasks = ls.fetchTasks();
    let index = tasks.findIndex( task => task.id === id);
    tasks[index].isCompleted = !tasks[index].isCompleted ;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

LS.prototype.findTask = (id) => {
    let tasks = ls.fetchTasks();
    return tasks.find( task => task.id === id);
}
export default LS;