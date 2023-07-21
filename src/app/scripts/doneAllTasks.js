import { defTasks, tasksList } from "../app.js";
import { saveToLocalStorage } from "./saveToLocalStorage.js";

export function doneAllTask() {
    console.log('>>>DELETE ALL TASK<<<');

    const newTasks = defTasks.GetTasks().map((task) => {
        const newTask = { ...task };
        newTask.done = true;
        return newTask;
    });

    defTasks.ReplaceTasks(newTasks);
    saveToLocalStorage();

    const taskTitle = tasksList.querySelectorAll(".task-title");
    for (const element of taskTitle) {
        element.classList.add("task-title--done");
    }
}
