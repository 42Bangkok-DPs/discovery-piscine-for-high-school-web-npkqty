$(document).ready(function() {
    // Load existing TO DOs from cookies
    loadTodos();

    // Function to create a new TO DO
    $('#new_todo').click(function() {
        const todoText = prompt("Enter a new TO DO:");
        if (todoText && todoText.trim() !== "") {
            addTodo(todoText);
        }
    });

    // Function to add a TO DO to the list
    function addTodo(text) {
        const todoItem = $('<div class="todo_item"></div>').text(text);
        $('#ft_list').prepend(todoItem); // New tasks at the top
        saveTodos(); // Save the updated list

        // Click event to remove the TO DO
        todoItem.click(function() {
            if (confirm("Do you want to remove this TO DO?")) {
                $(this).remove();
                saveTodos(); // Save the updated list after removal
            }
        });
    }

    // Function to save TO DOs to cookies
    function saveTodos() {
        const todos = [];
        $('#ft_list .todo_item').each(function() {
            todos.push($(this).text());
        });
        document.cookie = "todos=" + JSON.stringify(todos) + "; path=/; max-age=31536000"; // Set a max age for the cookie
    }

    // Function to load TO DOs from cookies
    function loadTodos() {
        const cookieArray = document.cookie.split('; ');
        const todosCookie = cookieArray.find(row => row.startsWith('todos='));

        if (todosCookie) {
            const todos = JSON.parse(todosCookie.split('=')[1]);
            // Reverse the order to display oldest first
            todos.reverse().forEach(todo => addTodo(todo)); // Oldest first in the list
        }
    }
});