import { defTasks } from "../app.js";
import { checkEmptyList } from "./checkEmptyList.js";
import { saveToLocalStorage } from "./saveToLocalStorage.js";

export function deleteTask(event) {
    console.log('>>>DELETE TASK<<<');

    //Если клик не по кнопке удалить задачу
    if (event.target.dataset.action !== 'delete') return;

    const parentNode = event.target.closest('.list-group-item');
    const id = Number(parentNode.id);

    // удаляем из массива фильтрацией
    const newTasks = defTasks.GetTasks().filter((task) => task.id !== id)
    defTasks.ReplaceTasks(newTasks)

    // удаляем из разметки
    parentNode.remove();
    checkEmptyList()
    saveToLocalStorage()
}