import { defTasks } from "../app";

export function saveToLocalStorage() {
    console.log('>>>SAVE TO LOCAL STORAGE<<<');

    localStorage.setItem('tasks', JSON.stringify(defTasks.GetTasks()))
}