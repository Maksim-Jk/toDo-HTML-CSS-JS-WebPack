import { defTasks, renderTask } from "../app.js";
import { checkEmptyList } from "./checkEmptyList.js";

export function getTasksFromLocalStorage() {
    console.log('>>>GET TASKS FROM LOCAL STORAGE<<<');

    if (localStorage.getItem("tasks")) {
        defTasks.ReplaceTasks(JSON.parse(localStorage.getItem("tasks")))
        defTasks.GetTasks().forEach((task) => renderTask(task));
        checkEmptyList();
    }
}

