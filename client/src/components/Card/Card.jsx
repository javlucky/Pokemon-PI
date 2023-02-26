import style from './Card.module.css';

const Card = (props) => {
    return(
        <div className={style.card}>
            <p>Name:{props.name}</p>
            <p>Vida:{props.vida}</p>
            <p>Ataque:{props.ataque}</p>
            <p>Defensa:{props.defensa}</p>
            <p>Velocidad:{props.velocidad}</p>
        </div>
    )
}

export default Card;