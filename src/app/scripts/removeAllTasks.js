import { defTasks, tasksList } from "../app.js";
import { checkEmptyList } from "./checkEmptyList.js";
import { saveToLocalStorage } from "./saveToLocalStorage.js";

export function removeAllTasks() {
    console.log("REMOVE ALL TASKS");
    defTasks.ReplaceTasks([]);
    saveToLocalStorage();
    tasksList.innerHTML = "";

    // while (tasksList.firstChild){
    // tasksList.removeChild(tasksList.firstChild)}
    checkEmptyList();
}
