const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler );

function formHandler(event) {
    event.preventDefault();
    //получение название задачи из поля input
    const taskText = todoInput.value;
    // 1 вариант: создаем тег lil через разметку
    // const liTitle = `<li>${taskText}</li>`;
    //добавляем разметку на страницу
    // todoList.insertAdjacentHTML('beforeend', liTitle);
    //очищаем поле ввода
    // todoInput.value = '';
    //переносим фокус на поле ввода после добавления цели

    // todoInput.focus();
}


