const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();
    //получение название задачи из поля input
    const taskText = todoInput.value;
    //Создаем тег li с помощью создания элемента
    const newTask = document.createElement('li');
    newTask.innerText = taskText;
    //Создаем кнопку удалить
    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('role', 'button');
    removeBtn.innerText = 'Delete';
    removeBtn.style['margin-left'] = '15px';
    newTask.append(removeBtn);
    removeBtn.addEventListener('click', function () {
        this.closest('li').remove()
    });
    //Добавление элемента на страницу
    todoList.append(newTask)
    //очищаем поле ввода
    todoInput.value = '';
    //переносим фокус на поле ввода после добавления цели
    todoInput.focus();

}

// 1 вариант: создаем тег lil через разметку
// const liTitle = `<li>${taskText}</li>`;
//добавляем разметку на страницу
// todoList.insertAdjacentHTML('beforeend', liTitle);


//======================Timer
const counterElement = document.querySelector('#counter');
let counter = 0;
let timerID;

const btnStart = document.querySelector('#start');
btnStart.onclick = function (){
    timerID = setInterval(function () {
        counter++;
        counterElement.innerText = counter;
    }, 1000);
}

const btnStop = document.querySelector('#stop');
btnStop.onclick = function () {
    clearInterval(timerID);
    console.log('Stop')
}

const btnReset = document.querySelector('#reset');
btnReset.onclick = function () {
    counter = 0;
    counterElement.innerText = counter;
    clearInterval(timerID);
    console.log('counter');
}

