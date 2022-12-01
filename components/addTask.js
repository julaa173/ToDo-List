import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (evento) => {
    const list = document.querySelector('[data-list]');
    const task = createTask(evento);
    list.appendChild(task);
};



const createTask = (evento) => {
    evento.preventDefault();
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');
    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY'); 
    
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';

    const taskContent = document.createElement('div');

    const taskObj = {
        value,
        dateFormat
    }

    localStorage.setItem("tasks", JSON.stringify(taskList));
    
    taskList.push(taskObj);

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerHTML = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    // task.innerHTML = content; 
    const dateElement = document.createElement('span');
    dateElement.innerHTML = dateFormat;
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    
    return task

};