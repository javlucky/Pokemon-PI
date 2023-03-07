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
    /*for(let i=1; i <= Math.ceil(pokes / pokesXpage); i++){
        numPage.push(i);
    }

    return(
        <div className={style.pagination}>
            <h1>hola hola</h1>

            {/*btn Prev */
            /*{
               numPage && currentpage > 1 ?
                <button className={style.navigate} onClick={() => pagination(currentpage -1)}>Prev</button>
            }

            {/* btn Paginas ->num paginas-> 1-2-3 etc*//*
            { {
                numPage && numPage.map((num) => {
                   return(
                        <button className={currentpage === num ? style.pageSelected : style.page} key={num}
                                </div>onClick={() => pagination(num)}>{num}</button>
                    )
                })
            } }

             {/*btn  Next*//*
             {
                numPage && currentpage <= numPage.lenght -1 ?
                <button className={style.navigate} onClick={() => pagination(currentpage + 1)}>Next</button>
            }
        </div>
    )*/


export default Pagination;