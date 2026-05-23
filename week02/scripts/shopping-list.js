const list = document.querySelector('ul');     
const input = document.querySelector('input');  
const button = document.querySelector('button');
function addItem() {
    event.preventDefault();
    const item = input.value;
    input.value = "";
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');
    span.textContent = item;  
    deleteBtn.textContent = "Delete";
    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
    input.focus();
}
button.addEventListener('click', addItem);
