import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchP } from '../../../redux/Actions/actions';
import Style from './SearchBar.module.css';

function validator(input){
    const errors = {};

    if(!input.name){errors.name = "Pleace enter the name of Poke!!"}
    if(!/^[a-zA-Z\s]*$/.test(input.name)){errors.name = "Pleace, enter only letters";}

    return errors;
}

 const SearchBar= () => {

    const [input, setInput] = useState({name: ""});
    const [error, setError] = useState({name: ""});
    const dispatch = useDispatch();   
    
    const handlerCH = (e) => {
        setInput({name: e.target.value.toLowerCase()});//paso el name a minus, porq de la api viene en minus
        setError(validator({name: e.target.value.toLowerCase()}));
    };
    const handlerS = (e) => {
        e.preventDefault();
        if(!input.name){
            alert("Ing nomb");
        }else if(!/^[a-zA-Z\s]*$/.test(input.name)){
            alert("Pleace, enter only letters");
            setInput({name: ""});
        }            
        else{
            dispatch(searchP(input.name));
            setInput({name: ""});
        }
    };

    return(
        
        <form onSubmit={handlerS} className='div-search'>            
            
            {error.name && (<span className={Style.spanErrorSearch}>{error.name}</span>)}
           
            <input className={error.name ? Style.errorInputSearch : Style.inputSearch} type={'text'} id={'name'} value={input.name} onChange={handlerCH} placeholder={'name Poke'}/>
            
            <input className={Style.btnSubmit} type={'submit'} value={'Search'} />                               

        </form>
        
    )
};

export default SearchBar;