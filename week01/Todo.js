// 해야 할 일을 추가
function addTodo() {
    const input = document.getElementById('todo');
    const todoList = document.getElementById('list');

    const todoText = input.value.trim();
    if (todoText === '') return; 

    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    
    const span = document.createElement('span');
    span.textContent = todoText;
    todoItem.appendChild(span);

    const completeButton = document.createElement('button');
    completeButton.textContent = '완료';
    completeButton.onclick = () => completeTodo(todoItem);
    todoItem.appendChild(completeButton);

    todoList.appendChild(todoItem);

    input.value = '';
}

// 할 일->해낸 일
function completeTodo(todoItem) {
    const clearList = document.getElementById('clear');
    
    
    const doneItem = todoItem.cloneNode(true);
    doneItem.querySelector('button').textContent = '삭제';
    doneItem.querySelector('button').onclick = () => deleteTodo(doneItem);
    clearList.appendChild(doneItem);
    
    
    todoItem.remove();
}

// 해낸 일 삭제
function deleteTodo(todoItem) {
    todoItem.remove();
}

// Enter 키 
document.getElementById('todo').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
