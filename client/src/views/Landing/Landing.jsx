import pokemonCortado2 from '../../Assets/Images/pokemonCortado2.webm';
import style from './Landing.module.css'
import { Link } from 'react-router-dom';

const Landing = () => {
    return(
        <section className={style.mainContainer}>
            <video
            className={style.videoBg}
            src={pokemonCortado2}
            autoPlay
            loop
            muted
            playsInline
            />
            <div className={style.innerContainer}>
                <h1 className={style.title}>
                Welcome to the pokemons world...!!
                </h1>
                <Link to="/home">
                    <button className={style.btn}>Let's Go!!</button>
                </Link>
            </div>
        </section>    
    )
};


export default Landing;