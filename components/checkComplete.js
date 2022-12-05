const checkComplete = (id) => {
    const i = document.createElement('i');
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener('click', (event) => completeTask(event, id));
    return i
};

const completeTask = (event, id) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
    const task = JSON.parse(localStorage.getItem('tasks'));
    const index = tasks.findIndex( item => item.id === id);
    task[index]["complete"] = !tasks[index]["complete"];
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

export default checkComplete;
