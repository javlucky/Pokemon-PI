import React from "react";
import style from './Loading.module.css'
import loading from '../../Assets/Images/loading.gif'

 const Loading= ()=> {

    return(
        <div className="load">
          <h3 className="texto-load">Loading...</h3>

          <img className={style.gif} src={loading} alt={"not found"} />
        </div>
    )
};

export default Loading;