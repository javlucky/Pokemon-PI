import Card from "../Card/Card";
import style from './CardsContainer.module.css';
import { useSelector } from "react-redux";

const CardsContainer = () => {

    const pokemons = useSelector(state=>state.pokemons);  
    
    return(
        <div className={style.container}>
            {pokemons.map(pokemon=>{
                return <Card 
                    id={pokemon.id}
                    name={pokemon.name}
                    vida={pokemon.vida}
                    ataque={pokemon.ataque}
                    defensa={pokemon.defensa}
                    velocidad={pokemon.velocidad}
                />
            })}
        </div>
    )
}

export default CardsContainer;