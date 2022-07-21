import './style.css';

//ANCHOR props=> colocar o props em uma função habilita para ser adicionado propriedades (nome, tempo)
export function Card(props) {
    return (
        <div className="card">
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}

// Pode também ser feito da seguinte forma, sem o uso do props, somente encapsulando as props
// export function Card({name, time}) {
//     return (
//         <div className="card">
//             <strong>{name}</strong>
//             <small>{time}</small>
//         </div>
//     )
// }