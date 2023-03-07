import React, { useEffect } from 'react';
import { Link, useHistory} from "react-router-dom";
//import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {pokeDetail, resetDetail, deleteP_DB} from '../../redux/Actions/actions';
import style from './Detail.module.css';
//import NavBar from '../../components/NavBar/NavBar';
//import Loading from '../../components/Loading/Loading';
import loadingGif from '../../Assets/Images/loading.gif';
import memechu from '../../Assets/Images/memechu.jpg'


const Detail = (props) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(pokeDetail(props.match.params.id))
        return( ()=>{
            dispatch(resetDetail())
        })
    },[dispatch, props.match.params.id])

    const history = useHistory()
    const pokemonDetail = useSelector((state) => state.pokeDetails)
    const handleClick = (e) => {
            let text = "Do you want to eliminate this Pokemon?"
            if (window.confirm(text) === true) {
                //eslint-disable-line
                dispatch(deleteP_DB(pokemonDetail.id));
                alert('pokemon successfully eliminated')
                history.push('/home')
              } else {
                return null
              }
    }
    return(
        <div className={style.div}>
            <Link className={style.link} to='/home'><button className={style.btn}>POKEMONS</button></Link>
            {
                Object.keys(pokemonDetail).length!==0?
                <div className={style.div1}>
                    {pokemonDetail.InDB?<button onClick={handleClick} className={style.btnx}>x</button>:null}
                    <div className={style.div105}>
                        <h1 className={style.h1}>{pokemonDetail.name.toUpperCase()}</h1>
                    </div>
                    <div className={style.div2}>
                        <img src={pokemonDetail.img?pokemonDetail.img:memechu} alt="" width="150em" height="200em" className={style.img}/>
                        <div className={style.div3}>
                            <p>Hp: {pokemonDetail.hp}</p>
                            <p>Attack: {pokemonDetail.attack}</p>
                            <p>Defense: {pokemonDetail.defense}</p>
                            <p>speed: {pokemonDetail.speed}</p>
                            <p>weight: {pokemonDetail.weight}</p>
                            <p>Height: {pokemonDetail.height}</p>
                            <p>Types: {pokemonDetail.types.map(m=>m[0].toUpperCase()+m.slice(1)+' ')}</p>
                        </div>
                    </div>
                </div>:
                <div>
                    <img src={loadingGif} alt="" />
                    <p className={style.load}>Loading...</p>
                </div>
            }
        </div>
    )
};


export default Detail;