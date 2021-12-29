class LS {
    fetchTasks() {
        let tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    }
    storeTask(task) {
        let tasks = this.fetchTasks();
        tasks.unshift(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    deleteTask(id) {
        let tasks = this.fetchTasks();
        let index = tasks.findIndex(task => task.id === id);
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    completeTask(id) {
        let tasks = this.fetchTasks();
        let index = tasks.findIndex(task => task.id === id);
        tasks[index].isCompleted = !tasks[index].isCompleted;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    findTask(id) {
        let tasks = this.fetchTasks();
        return tasks.find(task => task.id === id);
    }
    updateTask(id, title) {
        let tasks = this.fetchTasks();
        let index = tasks.findIndex(task => task.id === id);
        tasks[index].title = title;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

export default LS;