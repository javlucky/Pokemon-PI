import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import style from './CardsContainer.module.css';
import {getAllP, getAllT,filtroAZ_ZA, filtroOrigen, filtroTypes, resetF, filtroAttack} from '../../redux/Actions/actions'
import Loading from '../Loading/Loading';
import NotFound from "../NotFound/NotFound";
import Pagination from "../Pagination/Pagination";


const CardsContainer = () => {

    const allP = useSelector(state => state.resultsPokes);
    const allT = useSelector(state => state.allTypes);
    const dispatch = useDispatch();
    const load = useSelector(state => state.load);
    //----paginations------
    const [currentpage, setCurrentPage] = useState(1);

    const pokesXpage = 12;
    const lastIndexPage = pokesXpage * currentpage;//ejm 12*1=12....para la pag 1.
    const firstIndexPage = lastIndexPage - pokesXpage;//ejm 12-12=0...para la pag 1.
    const fraccionPokes = allP.slice(firstIndexPage, lastIndexPage);//asigno de a 12 elemnts
    const pagination = (numPag) => {//funcion para ir actualiz la pagina
        setCurrentPage(numPag);
    }
    //----------------------------------------------------------------------------------------
    //---FILTROS-----
    const handlerCL = (e) => {
        switch(e.target.id){
            case 'az':
                dispatch(filtroAZ_ZA('az'));
                setCurrentPage(1);
                break;
            case 'za':
                dispatch(filtroAZ_ZA('za'));
                setCurrentPage(1);
                break;
            case 'maxHp':
                dispatch(filtroAttack('max'));
                break;
            case 'minHp':
                dispatch(filtroAttack('min'));
                setCurrentPage(1);
                break;
            case 'db':
                dispatch(filtroOrigen('db'));
                setCurrentPage(1);
                break;
            case 'api':
                dispatch(filtroOrigen('api'));
                setCurrentPage(1);
                break;
            case 'tipos':
                dispatch(filtroTypes(e.target.value));
                setCurrentPage(1);
                break;
            case 'reset':
                dispatch(resetF());
                setCurrentPage(1);
                break;
            default:
                break;
        }
    }
    //--------------
    useEffect(()=>{
        dispatch(getAllP());
        dispatch(getAllT());
    },[dispatch]);


    return(
        <div className={style.contGralPokes}>
            {//si laod es true cargo component loading
                load ? 
                (<div>
                    <Loading/>
                </div>) 
                : 
                (<div className={style.contCards}>
                    {/*---FILTROS--------- */}
                    <div className={style.contFiltros}>
                        <button className={style.btnFiltro} id={'az'} onClick={handlerCL}>A-Z</button>
                        <button className={style.btnFiltro} id={'za'} onClick={handlerCL}>Z-A</button>
                        <button className={style.btnFiltro} id={'maxHp'} onClick={handlerCL}>+ HP</button>
                        <button className={style.btnFiltro} id={'minHp'} onClick={handlerCL}>- HP</button>
                        <button className={style.btnFiltro} id={'db'}  onClick={handlerCL}>Pokes DB</button>
                        <button className={style.btnFiltro} id={'api'} onClick={handlerCL}>Pokes API</button>
                        <select value={'default'} id={'tipos'} onChange={handlerCL} className={style.selectFiltro}>
                            <option value={'default'} disabled>Types</option>
                            {
                                allT[0] ? allT.map(t => {
                                    return(
                                        <option key={t.id} value={t.name}>{t.name}</option>
                                    ) 
                                 }) : <option>Loading...</option>                   
                            }
                        </select>
                        <button className={style.btnFiltro} id={'reset'} onClick={handlerCL}>Reset Filters</button>
                    </div>                                      
                    {/*-------------------------------- */}
                    <div className={style.cards}>
                        {  
                          fraccionPokes[0] ?
                          fraccionPokes.map(p => {
                                return(
                                    <div key={p.id} >
                                        <Card key={p.id} id={p.id} name={p.name} foto={p.imagen} 
                                            types={p.types} createInDB={p.createDB}
                                        />
                                </div>
                                )
                            }) : (<div className="notfound">
                                    <NotFound/>
                                </div>)
                        }
                    </div>                        
                                                 
                    <div className={style.pag}>                    
                      <Pagination pokesXpage={pokesXpage} pokes={allP.length} pagination={pagination} currentpage={currentpage}/>
                    </div> 
                </div>)
            
            }
                    
        </div> 
    )    
/*    const pokemons = useSelector(state=>state.pokemons)
    
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
    )*/
}

export default CardsContainer;