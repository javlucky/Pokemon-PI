import React from "react";
import style from './Pagination.module.css'

//pokesXpage={pokesXpage} pokes={allP.length} pagination={pagination} currentpage={currentpage}
const Pagination = ({pokesXpage, pokes, pagination, numOfPage}) => {

    const numPage = [];

    for (let i = 0; i < Math.ceil(pokes/pokesXpage); i++) {
        numPage.push(i+1)
    }
    return(
        <nav>
            
            <ul className={style.ul}>
                {numPage&&numPage.map(number=>(
                    <li className={style.li} key={number}>   
                        {
                            numOfPage(number)?<a className={style.a} onClick={()=> pagination(number)}>{number}</a>:
                            <a className={style.a2} onClick={()=> pagination(number)}>{number}</a>
                        } 
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Pagination;