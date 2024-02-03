document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
  
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskItem = createTaskItem(taskText);
      document.getElementById('pendingList').appendChild(taskItem);
      taskInput.value = '';
    }
  }
  
  function createTaskItem(text) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
      updateTaskStatus(li, checkbox.checked);
    });
  
    const span = document.createElement('span');
    span.textContent = text;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      li.remove();
    });
  
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
  
    return li;
  }
  
  function updateTaskStatus(taskItem, completed) {
    if (completed) {
      taskItem.classList.add('completed');
      document.getElementById('completedList').appendChild(taskItem);
    } else {
      taskItem.classList.remove('completed');
      document.getElementById('pendingList').appendChild(taskItem);
    }
  }
  