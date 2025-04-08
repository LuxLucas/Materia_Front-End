function addItem(){
    const input = document.querySelector('#text-to-do');

    if(!input.value || input.value.trim() === ''){
        return null;
    }

    const lista = document.querySelector('.list-task');
    const contentTask = document.createElement('div');
    const item  = document.createElement("li");
    const btnRemoveTask = document.createElement('button');

    contentTask.setAttribute('class', 'content-task');
    item.setAttribute('class', 'task');
    btnRemoveTask.setAttribute('class', 'btn-remove-task');

    item.textContent = input.value;
    btnRemoveTask.textContent = 'Remover';
    btnRemoveTask.addEventListener('click', () => {
        contentTask.remove();
    });

    lista.appendChild(contentTask);
    contentTask.appendChild(item);
    contentTask.appendChild(btnRemoveTask);

    input.value = '';
    input.focus();
}