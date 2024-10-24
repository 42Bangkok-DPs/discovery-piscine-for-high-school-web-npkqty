document.addEventListener("DOMContentLoaded", function() {
    const ftList = document.getElementById("ft_list");
    const newButton = document.getElementById("newButton");

    // Load tasks from cookies
    loadTasks();

    // Event listener for the "New" button
    newButton.addEventListener("click", function() {
        const todoText = prompt("Enter a new TO DO:");
        if (todoText && todoText.trim() !== "") {
            addTask(todoText);
            saveTasks();
        }
    });

    // Function to add a new task
    function addTask(text) {
        const todoDiv = document.createElement("div");
        todoDiv.textContent = text;
        todoDiv.classList.add("todo-item");

        // Event listener for removing a task
        todoDiv.addEventListener("click", function() {
            if (confirm("Do you really want to remove this TO DO?")) {
                ftList.removeChild(todoDiv);
                saveTasks();
            }
        });

        ftList.insertBefore(todoDiv, ftList.firstChild);
    }

    // Function to save tasks to cookies
    function saveTasks() {
        const tasks = Array.from(ftList.children).map(item => item.textContent);
        document.cookie = `tasks=${JSON.stringify(tasks)}; path=/;`;
    }

    // Function to load tasks from cookies
    function loadTasks() {
        const cookies = document.cookie.split('; ');
        const taskCookie = cookies.find(cookie => cookie.startsWith('tasks='));
        if (taskCookie) {
            const tasks = JSON.parse(taskCookie.split('=')[1]);
            tasks.forEach(task => addTask(task));
        }
    }
});
