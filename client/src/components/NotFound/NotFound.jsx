import React from "react";
import style from './NotFound.module.css'
import notfound from '../../Assets/Images/notF.gif'

const NotFound= () => {
 
    return(
        <div className={style.notfound-cont}>

          <div>
          <h3 className={style.texto}>Poke not found</h3>
          </div>

          <div>       
          <img src={notfound} alt={'not found'} className={style.gif-dog}/>          
          </div>
        
        </div>
    )
};

export default NotFound;