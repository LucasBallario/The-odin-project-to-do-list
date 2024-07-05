let tasks = [];

function displayTasks() {
    const tasklist = document.querySelector("#task-display");
    tasklist.innerHTML = "<h2>Tasks to do</h2>"; 

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task");

        taskItem.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>Fecha de vencimiento: ${task.date}</p>
            <button onclick="deleteTask(${index})">Eliminar</button>
        `;

        tasklist.appendChild(taskItem);
    });
}

function createtask(event) {
    event.preventDefault(); 

    const taskName = document.querySelector(".title").value;
    const taskDescription = document.querySelector(".description").value;
    const taskDate = document.querySelector(".date").value;

    const newTask = {
        title: taskName,
        description: taskDescription,
        date: taskDate
    };

    tasks.push(newTask);
    displayTasks();

    // Limpiar el formulario después de agregar la tarea
    document.getElementById("task-form").reset();
}


function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}


document.getElementById("task-form").addEventListener("submit", createtask);

// Cargar tareas y mostrarlas cuando se inicie la aplicación
displayTasks();
