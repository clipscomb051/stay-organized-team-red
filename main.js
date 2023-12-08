"use strict"

window.onload = function (_event) {
    getUsers()
        .then(populateUserSelect)
        //.then(populateTodo)

    const userSelect = document.getElementById("user-select")
  //userSelect.onchange = function(){}
}

function getUsers() {
    return fetch(`http://localhost:8083/api/users`)
        .then(response => response.json())
        .then(data => data.todos.category)
        .then(fetchcategory ) 
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

function fetchTodosByUser (categoryurl) {
    fetch(categoryurl)
    .then(response => response.json())
   //.then(data => renderTodoCard(Data.todos.category))
    .then(fetchcategory ) 
        for (let index = 0; index < todos.length; index+= 1) {
            const element = todos[index];
            
        }
        console.log(data);
      
    }

fetchTodosByUser();

