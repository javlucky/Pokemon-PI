import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllP, searchP, filtroOrigen, getAllT, filtroAZ_ZA, filtroHP } from '../../redux/Actions/actions';
import { Link } from "react-router-dom";
import style from './Home.module.css';
import Card from '../../components/Card/Card';
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/NavBar/SearchBar/SearchBar";
import pokeicon from '../../Assets/Images/pokeicon.png';
import loadingGif from '../../Assets/Images/loading.gif';
//import NavBar from "../../components/NavBar/NavBar";

const Home = () => {

    const dispatch = useDispatch();
    const allCharacters = useSelector((state)=>state.characters)
    const [ setOrder ] = useState('')
    const [currentPage, setCurrent]=useState(1)
    const [charactersPerPage]=useState(12)
    const indexOfLastCharacter = currentPage*charactersPerPage
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage
    const currentCharacters = allCharacters?.slice(indexOfFirstCharacter,indexOfLastCharacter)
    const types = useSelector((state)=>state.types)

    useEffect(()=>{
        dispatch(getAllP());
        dispatch(getAllT());
    },[dispatch])
    const paginated = (pageNumber)=>{
        setCurrent(pageNumber)
    }
    const numOfPage= (num)=>{
        if(num===currentPage)return true
        return false
    }
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getAllP())
        setCurrent(1)
    }
    const handleSortName = (e) => {
        e.preventDefault();
        dispatch(filtroAZ_ZA(e.target.value))
        setCurrent(1)
        setOrder(`Ordenado ${e.target.value}`)
    }
    const handleSortHp = (e) => {
        e.preventDefault();
        dispatch(filtroHP(e.target.value))
        setCurrent(1)
        setOrder(`Ordenado ${e.target.value}`)
    }
    const handleFilter = (e) => {
        e.preventDefault();
        dispatch(searchP(e.target.value))
        setCurrent(1)
        setOrder(`Ordenado ${e.target.value}`)
    }
    const handleFilterCreated = (e) => {
        dispatch(filtroOrigen(e.target.value))
        setCurrent(1)
        setOrder(`Ordenado ${e.target.value}`)
    }

    return(
        <div className={style.div}>
            <div className={style.contenedor1}>
                <div className={style.homeBar}>
                    <Link className={style.linkH1} to='/'><h1 className={style.h1h}>Home</h1></Link>
                    <button className={style.btnImg} onClick={e=>{handleClick(e)}}>
                        <img className={style.img} src={pokeicon} alt="" width="220em" height="95em" />
                    </button>
                    <Link className={style.createLink} to='/Create'>Create Pokemon</Link>
                </div>
                <div className={style.divSelectorYbar}>
                    <div className={style.searchbar}>
                        <SearchBar setCurrent={setCurrent}/>
                     </div>
                    <div className={style.divSelector}>
                    <label className={style.labels}>Order Pokemons: 
                        <select className={style.select} onChange={e=>handleSortName(e)}>
                            <option value="none">None</option>
                            <option value="a-z">a-z</option>
                            <option value="z-a">z-a</option>
                        </select>
                    </label>
                    <label  className={style.labels}>Order By HP:
                        <select className={style.select} onChange={e=>handleSortHp(e)}>
                            <option value='hp'>HP</option>
                            <option value='max'>Max</option>
                            <option value='min'>Min</option>
                        </select>
                    </label>
                    <label className={style.labels}>Filter by Type: 
                        <select className={style.select} onChange={e=> handleFilter(e)}>
                            <option value="all">All</option>
                            {types.map(m=>{
                                return(
                                    <option value={m.name}>{m.name}</option>
                                )
                            })}
                        </select>
                    </label>
                    <label className={style.labels}>Show Pokemons: 
                    <select className={style.select} onChange={e=> handleFilterCreated(e)}>
                        <option value="all">All</option>
                        <option value="created">From DB</option>
                        <option value="api">From Api</option>
                    </select>
                    </label>
                    </div>
                </div>
            </div>
                    <Pagination
                        charactersPerPage= {charactersPerPage}
                        allCharacters={allCharacters.length}
                        paginated= {paginated}
                        numOfPage={numOfPage}
                        />
                <div className={style.paginatedYCard}>
                    <div className={style.card}>
                    {
                        currentCharacters.length!==0?currentCharacters.map(m=>{
                            return(
                                <Link key={m.id} to={'/Details/'+m.id} className={style.link}>
                                <Card name={m.name} img={m.img} types={m.types} id={m.id} />
                            </Link>
                            )
                        }):
                        <div>
                            <img src={loadingGif} alt="" />
                            <p className={style.load}>Loading...</p>
                        </div>
                    }
                    </div>
                </div>
                    <Pagination
                        charactersPerPage= {charactersPerPage}
                        allCharacters={allCharacters.length}
                        paginated= {paginated}
                        numOfPage={numOfPage}
                    />
        </div>
    )
};


export default Home;