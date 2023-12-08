"use strict"
window.onload = function (_event) {
    getUsers()
        .then(populateUserSelect)
        .then(getCategories)

    const userSelect = document.getElementById("userSelect")
    //userSelect.onchange = handleUserSelect

    const categorySelect = document.getElementById("categorySelect")
    
    const todoForm = document.getElementById("todoForm")
    todoForm.onsubmit = addToDo

}
function getUsers() {
    return fetch(`http://localhost:8083/api/users`)
        .then(response => response.json())
}

function populateUserSelect(users) {
    let html = ""
    for (const currentUser of users) {
        html += `<option value="${currentUser.id}">${currentUser.username}</option>`
    }

    console.log(users)
    const userPick = document.getElementById("userSelect")
    userPick.innerHTML += html
}

function getCategories() {
    let html = ""
    fetch(`http://localhost:8083/api/categories`)
        .then(response => response.json())
        .then(data => {
            for (const currentCategory of (data)) {
                html += `<option value="${currentCategory.id}">${currentCategory.name}</option>`

            }
            const pickCategory = document.getElementById("categorySelect")
            pickCategory.innerHTML = html
        })
}


function addToDo(event) {
    event.preventDefault()
    const todoForm = event.target
    const userId = todoForm.elements.userSelect.value
    const selectedCategoryId = todoForm.elements.categorySelect.value
    const selectedPriority = todoForm.elements.prioritySelect.value
    const selectedDeadline = todoForm.elements.deadlineInput.value
    const description = todoForm.elements.descriptionInput.value
    
    
    const newTodoJSON = JSON.stringify({
        // add the rest of the properties here
        // like userid and deadline
        userid: userId,
        category: selectedCategoryId,
        priority: selectedPriority,
        description: description,
        deadline: selectedDeadline,
        completed: false,

    })

    const options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: newTodoJSON,
    }

    fetch(`http://localhost:8083/api/todos/`, options)
        .then(response => response.json())
        .then(data => console.log(data))

    addToDo.innerHTML = `<h4>description:</h4>`
}


