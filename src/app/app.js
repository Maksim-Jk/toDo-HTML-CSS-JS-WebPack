import './styles/style.scss'
import { addTask } from "./scripts/addTask";
import { deleteTask } from "./scripts/deleteTask";
import { doneAllTask } from "./scripts/doneAllTasks";
import { doneTask } from "./scripts/doneTask";
import { removeAllTasks } from "./scripts/removeAllTasks";
import { getTasksFromLocalStorage } from "./scripts/getTasksService";

// Находим элементы на странице
export const form = document.querySelector("#form");
export const taskInput = document.querySelector("#taskInput");
export const tasksList = document.querySelector("#tasksList");
export const deleteAllTasks = document.querySelector("#deleteAll");
export const doneAllTasks = document.querySelector("#doneAll");

form.addEventListener("submit",  addTask); // Добавление задачи
tasksList.addEventListener("click", deleteTask); // Удаление задачи
tasksList.addEventListener("click", doneTask); // Задача выполнена
deleteAllTasks.addEventListener("click", removeAllTasks); // Удалить все задачи
doneAllTasks.addEventListener("click", doneAllTask); // Удалить все задачи


class tasksType {
    constructor() {
        this.tasks = [];
    }

    GetTasks() {
        return this.tasks;
    }
    SetTasks(newTask) {
        this.tasks = [...this.tasks, newTask];
    }
    ReplaceTasks(newTasks){
        this.tasks = newTasks;
    }
}
export const defTasks = new tasksType()

getTasksFromLocalStorage();





// Функции

export function renderTask(task) {
    const cssClass = task.done === true ? "task-title task-title--done" : "task-title";

    const taskHTML = `<li id="${task.id}"class="list-group-item d-flex justify-content-between task-item">
                <span class="${cssClass}">${task.text}</span>
                <div class="task-item__buttons">
                    <button type="button" data-action="done" class="btn-action">
                        <img src="./img/tick.svg" alt="Done" width="18" height="18">
                    </button>
                    <button type="button" data-action="delete" class="btn-action">
                        <img src="./img/cross.svg" alt="Done" width="18" height="18">
                    </button>
                </div>
            </li>`;
    // добавляем на страницу
    tasksList.insertAdjacentHTML("beforeend", taskHTML);
}
