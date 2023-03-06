import React from "react";
import style from './Pagination.module.css'

//pokesXpage={pokesXpage} pokes={allP.length} pagination={pagination} currentpage={currentpage}
const Pagination = ({pokesXpage, pokes, pagination, currentpage}) => {

    const numPage = [];

    for(let i=1; i <= Math.ceil(pokes / pokesXpage); i++){
        numPage.push(i);
    }

    return(
        <div className={style.pagination}>

            {/*btn Prev */}
            {
                numPage && currentpage > 1 ?
                <button className={style.navigate} onClick={() => pagination(currentpage -1)}>Prev</button> : null
            }

            {/* btn Paginas ->num paginas-> 1-2-3 etc*/}
            {
                numPage && numPage.map((num) => {
                    return(
                        <button className={currentpage === num ? style.pageSelected : style.page} key={num}
                                onClick={() => pagination(num)}>{num}</button>
                    )
                })
            }

             {/*btn  Next*/}
             {
                numPage && currentpage <= numPage.lenght -1 ?
                <button className={style.navigate} onClick={() => pagination(currentpage + 1)}>Next</button> : null
            }
        </div>
    )
};

export default Pagination;