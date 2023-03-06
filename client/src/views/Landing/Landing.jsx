import pokemonCortado from '../../Assets/Images/pokemonCortado.mp4'
import style from './Landing.module.css'
import { Link } from 'react-router-dom';

const Landing = () => {
    return(
        <section className={style.mainContainer}>
            <video
            className={style.videoBg}
            src={pokemonCortado}
            autoPlay
            loop
            muted
            playsInline
            />
            <div className={style.innerContainer}>
                <h1 className={style.title}>
                Welcome to the world of pokemons...!!
                </h1>
                <Link to="/home">
                    <button className={style.btn}>Let's Go!!</button>
                </Link>
            </div>
        </section>    
    )
};


export default Landing;