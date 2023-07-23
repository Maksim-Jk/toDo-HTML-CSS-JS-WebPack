import { defTasks, renderTask, taskInput } from "../app.js";
import { checkEmptyList } from "./checkEmptyList.js";
import { saveToLocalStorage } from "./saveToLocalStorage.js";

export function addTask(event) {
    console.log('>>>ADD TASK<<<');
    // отмена отправки формы
    event.preventDefault()

    // достаем текст из поля ввода
    const taskText = taskInput.value;

    if (!taskText){ return alert('Введите текст задачи')}

    //Описываем задачу в виде объекта
    const newTask = {
        id: Date.now(),
        text: taskText,
        done: false
    };
    defTasks.SetTasks(newTask)
    renderTask(newTask)

    // Очистка поля ввода и фокус
    taskInput.value = '';
    taskInput.focus();
    checkEmptyList()
    saveToLocalStorage()
}