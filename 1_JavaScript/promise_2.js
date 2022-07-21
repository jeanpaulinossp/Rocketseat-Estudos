//fetch é um promise

fetch("https://api.github.com/users/jeanziiin")
.then(response => response.json())
.then( data => fetch(data.repos_url))
.then( res => res.json())
.then( d => console.log(d))
.catch((err) => console.log(err));

//essa aplicação retorna informações dos diretorios do github