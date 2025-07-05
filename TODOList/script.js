document.addEventListener('DOMContentLoaded', function() 
{
    document.getElementById('add-task').addEventListener('click', function() 
    {
        var taskInput = document.getElementById('task');
        var taskText = taskInput.value.trim();
        if (taskText !== '') 
        {
            addTask(taskText);
            taskInput.value = '';
        } 
        else 
        {
            console.log('Task text is empty.');
        }
    });

    function addTask(taskText) 
    {
        var taskList = document.getElementById('task-list');
        var taskRow = document.createElement('tr');
        
        var checkboxCell = document.createElement('td');
        checkboxCell.className = 'checkbox-column';
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.addEventListener('change', function() 
        {
            if (this.checked) 
            {
                taskRow.classList.add('completed');
            } 
            else 
            {
                taskRow.classList.remove('completed');
            }
        });
        checkboxCell.appendChild(checkbox);
        
        var taskDescriptionCell = document.createElement('td');
        taskDescriptionCell.className = 'task-description-column'; 
        taskDescriptionCell.textContent = taskText;

        var actionCell = document.createElement('td');
        actionCell.className = 'action-column'; 
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'DELETE';
        deleteButton.className = 'delete-task';
        deleteButton.addEventListener('click', function()
        {
            taskList.removeChild(taskRow);
        });
        actionCell.appendChild(deleteButton);

        var dateTimeCell = document.createElement('td');
        dateTimeCell.className = 'date-time-column'; 
        dateTimeCell.textContent = new Date().toLocaleString();

        taskRow.appendChild(checkboxCell);
        taskRow.appendChild(taskDescriptionCell);
        taskRow.appendChild(actionCell);
        taskRow.appendChild(dateTimeCell);

        taskList.insertBefore(taskRow, taskList.firstChild);
    }
});
