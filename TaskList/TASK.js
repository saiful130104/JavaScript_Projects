class TASK {
    constructor(title) {
        this.title = title;
        this.isCompleted = false;
        this.id = new Date().toLocaleString();
    }
};

export default TASK;