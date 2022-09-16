interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            {/* com o props é possível pegar as info passadas no diretório onde esta sendo importado a função 
            E foi colocado uma condição, caso não seja informado nada, irá puxar Default*/}
            {/* O sinal de interrogação depois do repository é para serve para verificar se o name está vazio
            e caso esteja, ja retorna direto o Default */}
            <strong>{props.repository?.name}</strong>
            <p>{props.repository?.description}</p>

            <a href={props.repository?.html_url} target="_blank">
                Acessar repositório
            </a>
        </li>
    )
}