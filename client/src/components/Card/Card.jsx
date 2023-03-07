import React from 'react';
import style from './Card.module.css';
import memechu from '../../Assets/Images/memechu.jpg'

const Card = ({name,img,types,id}) => {
    return(
        <div className={style.div} key={id}>
            <h3 className={style.h3}>{name.toUpperCase()}</h3>
            <img src={img?img:memechu} alt={`Imagen de ${name}`} width="150em" height="200em"/>
            <h5 className={style.h5}>Types: {types.map(m=>
                types.length>1?` - ${m.charAt(0).toUpperCase()+m.slice(1)}`:`${m.charAt(0).toUpperCase()+m.slice(1)} `)}</h5>
        </div>
    )
}

export default Card;