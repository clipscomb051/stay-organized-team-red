"use strict"
window.onload = function (_event) {
    getUsers()
        .then(populateUserSelect)
        .then(getCategories)

    const userSelect = document.getElementById("user-select")
    //userSelect.onchange = handleUserSelect

    const categorySelect = document.getElementById("category-select")
    categorySelect.onsubmit = newToDo
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
    const userPick = document.getElementById("user-select")
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
            const pickCategory = document.getElementById("category-select")
            pickCategory.innerHTML = html
        })
}


function newToDo(event){
    const addToDo = event.target.value
    let html = ""
    
}


