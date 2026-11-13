const taskContent = document.querySelector('.taskcontent')
const input = document.querySelector('input')
const addBtn = document.querySelector('#addBtn')

addBtn.addEventListener('click', function () {

    let task = document.createElement('div');
    task.classList.add('task')

    let li = document.createElement('li');
    li.innerText = `${input.value}`;
    task.appendChild(li)

    if (input.value === "") {
        alert('Please write task');
    } else {
        taskContent.appendChild(task);
    }
    
    input.value = ''
    
    let doneBtn = document.createElement('button')
    doneBtn.classList.add('doneBtn')
    doneBtn.innerHTML = `<i class= "fa-solid fa-check"></i>`
    task.appendChild(doneBtn)

    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
    task.appendChild(deleteBtn)

    doneBtn.addEventListener('click', function () {
        doneBtn.parentElement.style.textDecoration = "line-through";
    })

    deleteBtn.addEventListener('click', function(){
        task.remove()
    })

})

