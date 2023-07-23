import { defTasks, tasksList } from "../app";
import leaf from '../../assets/leaf.svg'

export function checkEmptyList() {
    console.log('>>>CHECK EMPTY LIST<<<');

    if (defTasks.GetTasks().length === 0) {
        const emptyListElement = `<li id="emptyList" class="list-group-item empty-list">
              <img src=${leaf} alt="Empty" width="48" class="mt-3">
              <div class="empty-list__title">Список дел пуст</div>
           </li>`;
        tasksList.insertAdjacentHTML("afterbegin", emptyListElement)
    }
    if (defTasks.GetTasks().length > 0) {
        const emptyListElement = document.querySelector('#emptyList')
        emptyListElement ? emptyListElement.remove() : null;
    }

}