# API

- GET: A API fornece informações
- POST: A API recebe informações que devem ou não ser registradas
- DELETE: A API recebe identificadores de registros que devem ser apagados
- PUT: A API recebe informações para update de um ou mais registros
- PATCH: A API recebe informações para update de um registro

## Importando uma API - Biblioteca AXIOS

import axios from "axios";

axios
  .get("https://api.github.com/users/jeanziiin")
  .then((response) => axios.get(response.data.repos_url))
  .then((repos) => console.log(repos.data))
  .catch((error) => console.log(error));

-------------------------------------------------------------------------------------------------
## O Promise.all é usado para importar mais de uma API

import axios from "axios";

Promise.all([
  axios.get("https://api.github.com/users/jeanziiin"),
  axios.get("https://api.github.com/users/jeanziiin/repos")
])
  .then((responses) => {
    console.log(responses[0].data.login);
    console.log(responses[1].data.length);
  })
  .catch((err) => console.log(err.message));

-------------------------------------------------------------------------------------------------
## Usando o Async e Await (Deixa o código mais assincromo)

async function start() {
  const url = "https://api.github.com/users/jeanziiin";
  const user = await fetch(url).then((r) => r.json());
  const userRepos = await fetch(user.repos_url).then((r) => r.json());
  console.log(userRepos);
}

start().catch((erro) => console.log(erro));

-------------------------------------------------------------------------------------------------
## Usando o Async e Await com o Axios

import axios from "axios";

async function fetchRepos() {
  try {
  const url = "https://api.github.com/users/maykbrito";
  const user = await axios.get(url);
  const repos = await axios.get(user.data.repos_url);
  console.log(repos);
  } catch(erro) {
    console.log(erro)
  }
  
}

fetchRepos();

-------------------------------------------------------------------------------------------------