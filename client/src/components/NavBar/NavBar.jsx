import { NavLink } from "react-router-dom";
import style from './NavBar.module.css';
import SearchBar from './SearchBar/SearchBar';

const NavBar = () => {
    return(
        <div className = { style.mainContainer }>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/create">Create pokemon</NavLink>
                    </li>
                    <div className={ style.searchBar }>
                    <SearchBar />
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;