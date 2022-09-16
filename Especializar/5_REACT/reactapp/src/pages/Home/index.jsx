import React, { useState, useEffect } from 'react';
import './style.css';
import { Card } from '../../components/Card'

export function Home() {
  //Para criar um estado no react, passa sempre os dois componentes
  // 1° onde vai guardar o estado
  // 2° a função que atualiza o estado (sempre começa com set)
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: "", avatar: ""});

  //função que pega o nome do estudante e a hora e armazena
  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    };
    //toda vez que a função for chamada, será criada um novo objeto com as propriedades name e time
    // o prevState guarda o estado anterior
    // dentro do estado, colocar os 3 pontinhos (...) para que ao ser aicionado, ele mantém sempre no mesmo vetor
    // spread operator (...)
    setStudents(prevState => [...prevState, newStudent]);
  }
  
  // fazer uma função dentro do useEffect para poder reaproveita-la
  //é usado para buscar informações em uma api e renderizar na tela
  useEffect(() => {
    //todas as ações que serão executadas assim que a interface for renderizada
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/jeanziiin")
      const data = await response.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }

    fetchData();
  }, []) //dentro do array, é colocado os estados que se quer que o useEffect seja renderizado

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto do Perfil" />
        </div>
      </header>
      <input 
      type="text" 
      placeholder="Digite o nome..."
      onChange={e => setStudentName(e.target.value)} // atualizando o estado a todo momento
      />

      {/* É importado a função dentro do botão para toda vez que clicar ela seja acionada */}
      <button 
      type="button" onClick={handleAddStudent}>
        Adicionar
        </button>

      {
        //a função map faz um mapeamento dos dados, igual ao for
        students.map(student => 
        <Card 
        //É importante sempre colocar dentro de todo estado um ID diferente, para que o sistema reconheça
        // futuramente quando for adicionar, editar ou apagar determinado dado registrado (dentro da key)
        key={student.time}
        name={student.name} 
        time={student.time}/>)
      }

    </div>
    
  )
}
