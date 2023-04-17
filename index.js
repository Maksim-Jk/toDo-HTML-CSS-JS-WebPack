// Находим элементы на странице
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const deleteAllTasks = document.querySelector('#deleteAll')
const doneAllTasks = document.querySelector('#doneAll')

let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((task) => renderTask(task));
    checkEmptyList()
}

form.addEventListener('submit', addTask) // Добавление задачи
tasksList.addEventListener('click', deleteTask) // Удаление задачи
tasksList.addEventListener('click', doneTask) // Задача выполнена
deleteAllTasks.addEventListener('click', removeAllTasks) // Удалить все задачи
doneAllTasks.addEventListener('click', doneAllTask) // Удалить все задачи

// Функции
function addTask(event) {
    // отмена отправки формы
    event.preventDefault()

    // достаем текст из поля ввода
    const taskText = taskInput.value;

    //Описываем задачу в виде объекта
    const newTask = {
        id: Date.now(),
        text: taskText,
        done: false
    };
    tasks.push(newTask)
    renderTask(newTask)

    // Очистка поля ввода и фокус
    taskInput.value = '';
    taskInput.focus();
    checkEmptyList()
    saveToLocalStorage()
}

function deleteTask(event) {
    //Если клик не по кнопке удалить задачу
    if (event.target.dataset.action !== 'delete') return;

    const parentNode = event.target.closest('.list-group-item');
    const id = Number(parentNode.id);

    // удаляем из массива фильтрацией
    tasks = tasks.filter((task) => task.id !== id)

    // удаляем из разметки
    parentNode.remove();
    checkEmptyList()
    saveToLocalStorage()
}

function doneTask(event) {
    if (event.target.dataset.action !== 'done') return

    const parentNode = event.target.closest('.list-group-item');

    // Поиск объекта
    const id = Number(parentNode.id);
    const task = tasks.find((task) => task.id === id)

    // Замена done на противоположное
    task.done = !task.done

    // Присвоение стиля done (toggle переключает (добавляет/убирает))
    const taskTitle = parentNode.querySelector('.task-title');
    taskTitle.classList.toggle('task-title--done')
    saveToLocalStorage()
}

function checkEmptyList() {
    if (tasks.length === 0) {
        const emptyListElement = `<li id="emptyList" class="list-group-item empty-list">
              <img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
              <div class="empty-list__title">Список дел пуст</div>
           </li>`;
        tasksList.insertAdjacentHTML("afterbegin", emptyListElement)
    }
    if (tasks.length > 0) {
        const emptyListElement = document.querySelector('#emptyList')
        emptyListElement ? emptyListElement.remove() : null;
    }

}

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function renderTask(task) {
    const cssClass = task.done === true ? "task-title task-title--done" : "task-title"

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
    tasksList.insertAdjacentHTML("beforeend", taskHTML)
}

function removeAllTasks() {
    tasks = [];
    saveToLocalStorage()
    tasksList.innerHTML = ''


    // while (tasksList.firstChild){
    // tasksList.removeChild(tasksList.firstChild)}
    checkEmptyList()
}

function doneAllTask() {

for (let i =0; i<tasks.length; i++){
    tasks[i].done = true
}
    saveToLocalStorage()

    const taskTitle = tasksList.querySelectorAll('.task-title');
    for (const element of taskTitle) {
        element.classList.add('task-title--done')
    }
}