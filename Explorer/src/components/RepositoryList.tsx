import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";
import '../styles/repositories.scss'

const reposUrl = "https://api.github.com/users/jeanziiin/repos";

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch(reposUrl)
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            {/* Os parametros passados dentro do repository são coletados no RepositoryItem graças ao props */}
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.id} repository = {repository} />
                })}
            </ul>
        </section>
    );
}