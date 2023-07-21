import { defTasks } from "../app.js";
import { saveToLocalStorage } from "./saveToLocalStorage.js";

export function doneTask(event) {
    console.log('>>>DONE TASK<<<');

    if (event.target.dataset.action !== 'done') return

    const parentNode = event.target.closest('.list-group-item');

    // Поиск объекта
    const id = Number(parentNode.id);
    const newTasks = defTasks.GetTasks().map(task=>{
        if (task.id===id){
            const newTask = { ...task };
            newTask.done = true;
            return newTask;
        } else {
            return task
        }
    })

defTasks.ReplaceTasks(newTasks)

    // Присвоение стиля done (toggle переключает (добавляет/убирает))
    const taskTitle = parentNode.querySelector('.task-title');
    taskTitle.classList.toggle('task-title--done')
    saveToLocalStorage()
}