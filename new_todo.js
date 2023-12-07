window.onload = function (_event){
    getUsers()
        .then(populateUserSelect)

    // getCategories()

    // const userSelect = document.getElementById("user-select")
    // userSelect.onchange = 

    // const categorySelect = document.getElementById("category-select")
    // categorySelect.onchange = 
}

function getUsers () {
    return fetch(`http://localhost:8083/api/users`)
        .then(response => response.json())
}
    
function getCategories () {
    return fetch(`http://localhost:8083/api/categories`)
        .then(response => response.json())
}