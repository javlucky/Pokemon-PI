import React from "react";
import style from './NotFound.module.css'
import pikachu2 from '../../Assets/Images/pikachu2.jpg';

const NotFound= () => {
 
    return(
        <div className={style.notfoundCont}>

          <div>
          <h3 className={style.texto}>Poke not found</h3>
          </div>

          <div>       
          <img src={pikachu2} alt={'not found'} className={style.pikachu}/>          
          </div>
        
        </div>
    )
};

export default NotFound;