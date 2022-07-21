const url = "http://localhost:5500/api"



function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser) {
    axios.post(url, newUser)
    .then(response => {
        console.log (response)
    })
    .catch(error => console.error(error))
}

const newUser = {
        name: "Jhon Keneddy",
        avatar: "https://picsum.photos/1000/1000",
        city: "New York"
    }

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userID.textContent = response.data.id
        userAvatar.src = response.data.avatar
    })
}

function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const userUpdated = {
    name: "Maria do Bairro",
    avatar: "https://picsum.photos/1000/1000",
    city: "Cidade dos bobos"
}

function deleteUser (id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}


updateUser(2, userUpdated)
getUsers()
getUser(2)
deleteUser(3)
// addNewUser(newUser)