import React from "react";
import style from './Pagination.module.css'

//pokesXpage={pokesXpage} pokes={allP.length} pagination={pagination} currentpage={currentpage}
const Pagination = ({pokesXpage, pokes, pagination, numOfPage}) => {

    const numPage = [];

    for (let i = 0; i < Math.ceil(pokes/pokesXpage); i++) {
        numPage.push(i+1)
    }

    // const hasLeftSpill = startPage > 2;
    //   const hasRightSpill = (totalPages - endPage) > 1;
    //   const spillOffset = totalNumbers - (pages.length + 1);

    //   switch (true) {
    //     // handle: (1) < {5 6} [7] {8 9} (10)
    //     case (hasLeftSpill && !hasRightSpill): {
    //       const extraPages = range(startPage - spillOffset, startPage - 1);
    //       pages = [LEFT_PAGE, ...extraPages, ...pages];
    //       break;
    //     }

    //     // handle: (1) {2 3} [4] {5 6} > (10)
    //     case (!hasLeftSpill && hasRightSpill): {
    //       const extraPages = range(endPage + 1, endPage + spillOffset);
    //       pages = [...pages, ...extraPages, RIGHT_PAGE];
    //       break;
    //     }

    //     // handle: (1) < {4 5} [6] {7 8} > (10)
    //     case (hasLeftSpill && hasRightSpill):
    //     default: {
    //       pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
    //       break;
    //     }
    //   }

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