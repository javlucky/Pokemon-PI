import React, { useEffect, useState } from "react";
import style from './Form.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { useDispatch, useSelector } from "react-redux";
import { getAllP, getAllT, postPoke } from '../../redux/Actions/actions';
import { NavLink } from "react-router-dom";
import pokeballPng from '../../Assets/Images/pokeball-png.png';

const validate = (input) => {
    const errors = {};

    if(!input.name){errors.name = "Pleace, name is required";}
    if(!/^[a-zA-Z\s]*$/.test(input.name)){errors.name = "Pleace, enter only letters";}
    if(!input.hp){errors.hp = "Pleace, hp is required";} 
    if(!input.attack){errors.attack = "Pleace, attack is required";}
    if(!/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(input.imagen)){errors.imagen = "No es una URL"};

    if(input.hp < 0){errors.hp = "No se permiten Numeros Negativos";} 
    if(input.attack < 0){errors.attack = "No se permiten Numeros Negativos";} 
    if(input.defense < 0){errors.defense = "No se permiten Numeros Negativos";}  
    if(input.speed < 0){errors.speed = "No se permiten Numeros Negativos";} 
    if(input.height < 0){errors.height = "No se permiten Numeros Negativos";} 
    if(input.weight < 0){errors.weight = "No se permiten Numeros Negativos";}   

    if(!/^[0-100]*$/.test(input.hp)){errors.hp = "No se permiten Letras, solo n° 0 a 100";}
    return errors;
}
const Form = () => {

    const initialState = { name: "", imagen:"", hp: "", attack: "", defense: "", speed: "", 
                           height: "", weight: "", type: []};
    const [input, setInput] = useState(initialState);
    const [error, setError] = useState(initialState);
    const allT = useSelector(state => state.allTypes);
    const allP = useSelector(state => state.allPokes);
    const dispatch = useDispatch();

    let buscoPoke = allP.find(p => p.name.toLowerCase() === input.name.toLowerCase());
  
    useEffect(()=>{
        dispatch(getAllT());
        dispatch(getAllP());
    },[dispatch]);

    const handlerCH = (e) => {
        e.preventDefault();        
        if(e.target.id === 'tipitos'){
            //verifico si ya se ingresó ese type
            let tipos = input.type.find(t => t === e.target.value);
            if(tipos){alert("Ya se ingresó ese type")}
            else{setInput({...input, type: [...input.type, e.target.value]});}            
        }else{
            setInput({...input, [e.target.id]: e.target.value});
            setError(validate({...input, [e.target.id]: e.target.value}));
        }
    };
    const handlerDelete = (elemnt) => {
         setInput({...input, type: input.type.filter(t => t !== elemnt)})
    };
    const handlerS = (e) => {
        e.preventDefault();        
        if((input.hp || input.attack || input.defense || input.speed || input.height || input.weight) < 0){
            alert("No se permiten Numeros Negativos...corrija por favor!!"); 
        }
        if(!input.name || !input.hp || !input.defense || !input.speed || !input.height || !input.weight || !input.type){
                 alert("Enter All dates!!");                 
        }else if(buscoPoke){
          alert("El Poke ya existe!!");
          setInput({name: "", imagen:"", hp: "", attack: "", defense: "", speed: "", height: "", weight: "", type: []});
        }else{           
            dispatch(postPoke(input));
            alert("Poke created !!");
            setInput({name: "", imagen:"", hp: "", attack: "", defense: "", speed: "", height: "", weight: "", type: []});
            dispatch(getAllP());
        }
    };
    return(
        <div>
            <NavLink className={style.navLink} src={pokeballPng} to={'/home'}>Home</NavLink>

            <div className={style.contGralCreate}>

                <form onSubmit={handlerS} className={style.contFormulario}>
                  
                    <div className={style.grupo1}>

                        <div className="nombre">
                            <label className={style.label}>Name: </label>
                            <input className={error.name ? style.errorInput : style.itemInput} type={'text'} id={'name'} value={input.name} onChange={handlerCH}/>
                            {error.name && (<div><span className={style.spanError}>{error.name}</span></div>)}
                            {/*muestro msj SI el poke a crear ya existe */}
                            {buscoPoke && (<div><span className={style.spanError}>El Poke ya existe!! Ing otro nomb!!</span></div>)}
                        </div>

                        <div className="hp">
                            <label className={style.label}>Hp: </label>
                            <input className={error.hp ? style.errorInput : style.itemInput} type={'number'} min={'1'} max={'100'} value={input.hp} id={'hp'} onChange={handlerCH} />
                               {error.hp && (<div><span className={style.spanError}>{error.hp}</span></div>)}
                        </div>

                        <div className="imagen-div">
                           <label className={style.label}>Imagen: </label>
                           <input className={style.itemInput} type={'text'} value={input.imagen} id={'imagen'} onChange={handlerCH} />
                           {error.imagen && (<div><span className={style.spanError}>{error.imagen}</span></div>)}
                        </div>

                        <div className="attack">
                            <label className={style.label}>Attack: </label>
                            <input className={error.attack ? style.errorInput : style.itemInput} type={'number'} min={'1'} max={'100'} value={input.attack} id={'attack'} onChange={handlerCH} />
                            {error.attack && (<div><span className={style.spanError}>{error.attack}</span></div>)}
                        </div>

                    </div>

                    <div className={style.grupo2}>
                        <div className="defense">
                         <label className={style.label}>Defense: </label>
                         <input className={style.itemInput} type={'number'} min={'1'} max={'100'} value={input.defense} id={'defense'} onChange={handlerCH} />
                        </div>

                        <div className="speed">
                          <label className={style.label}>Speed: </label>
                          <input className={style.itemInput} type={'number'} min={'1'} max={'100'} value={input.speed} id={'speed'} onChange={handlerCH} />
                        </div>

                        <div className="heigth">
                          <label className={style.label}>Height: </label>
                          <input className={error.height ? style.errorInput : style.itemInput} type={'number'} min={'1'} max={'100'} value={input.height} id={'height'} onChange={handlerCH} />
                             {error.height && (<span className={style.spanError}>{error.height}</span>)}
                        </div>                 

                        <div className="weight">
                          <label className={style.label}>Weight: </label>
                          <input className={error.weight ? style.errorInput : style.itemInput} type={'number'} min={'1'} max={'100'} value={input.weight} id={'weight'} onChange={handlerCH} />
                          {error.weight && (<span className={style.spanError}>{error.weight}</span>)}
                        </div>
                    </div>

                    <div className={style.grupo3}>
                    
                    <div>
                        <label className={style.labelType}>Type: </label><br></br>
                        <select className={style.selectTypesCreate}  onChange={handlerCH} id={'tipitos'}>
                            { 
                                allT[0] ? allT.map((t,i) => {
                                    return(
                                        <option key={i} value={t.name}>{t.name}</option>
                                    )
                                }) : <option>Loading...</option>
                            }
                        </select>
                    </div>
                        {/* muestra los types seleccionads*/}
                    <div >
                        {
                                
                            input.type.map((el, index) => {
                                return (
                                    <div key={index} >
                                        <button type="button" className={style.btnDelete} onClick={() => handlerDelete(el)}>x</button>
                                        <span className={style.nameType}>{el}</span>
                                    </div>
                                );
                            }) 
                                
                        }
                    </div>
                    </div>

                    <div className="div-btn-create">
                       <input className={style.btnCreate} type={'submit'} value={'Create Poke'} />
                    </div>

                </form>
            </div>
        </div>
    )
};


export default Form;