const Task = require('./Task');

class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentId = 1;
    }

    addTask(title) {
        const task = new Task(this.currentId++, title);
        this.tasks.push(task);
        return task;
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    editTask(id, newTitle) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.title = newTitle;
        }
    }

    completeTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = true;
        }
    }

    getTasks() {
        return this.tasks;
    }
}

module.exports = TaskManager;
